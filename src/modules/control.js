import {
  deleteGood, showGoodPicture, editGood, fetchRequest,
} from './service';
import {loadGoods, renderMainGoods} from './render';
import {
  mainTablePicWidth, mainTablePicHeight, timeOut, goodImgMaxSize,
} from './data';
import {mainTable, inputSearch} from './getElements';
import {
  cleanInput, isInputContainFile, isImgFileSizeCorrect, setPreviewImgSrc,
} from './util';

const debounce = (fn, msec) => {
  let lastCall = 0;
  let lastCallTimer = NaN;

  return (...args) => {
    const previousCall = lastCall;
    lastCall = Date.now();

    if (previousCall && ((lastCall - previousCall) <= msec)) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => fn(...args), msec);
  };
};

const renderSearchingGoods = async () => {
  const url = inputSearch.value;
  await fetchRequest(url, {
    callback: renderMainGoods,
  });
};

const searchDeboune = debounce(renderSearchingGoods, timeOut);

const inputSearchControl = async () => {
  inputSearch.addEventListener('input', searchDeboune);
};

export const hideGoodPreviewImg = (elem) => {
  elem.classList.remove('form__good-img-preview-wrapper--visible');
};

export const modalDeleteChoosenImgControl =
  (delGoodbutton, wrapperElem, inputElem) => {
    delGoodbutton.addEventListener('click', () => {
      hideGoodPreviewImg(wrapperElem);
      cleanInput(inputElem);
    });
  };

export const showGoodPreviewImg = (elem) => {
  elem.classList.add('form__good-img-preview-wrapper--visible');
};

const showAddImgErrorSizeMessage = (messageElem) => {
  messageElem.classList.add('form__adding-good-error-img-size--visible');
};

export const goodAddImgInputControl = (
    addImgInput, imgElem, wrapperElem, messageElem,
) => {
  addImgInput.addEventListener('change', () => {
    if (isInputContainFile(addImgInput)) {
      if (isImgFileSizeCorrect(addImgInput, goodImgMaxSize)) {
        setPreviewImgSrc(imgElem, addImgInput);
        showGoodPreviewImg(wrapperElem);
      } else {
        showAddImgErrorSizeMessage(messageElem);
        return true;
      }
    }
  });
};

export const mainTableControl = () => {
  loadGoods();
  deleteGood();
  showGoodPicture(mainTable, mainTablePicWidth, mainTablePicHeight);
  editGood();
  inputSearchControl();
};
