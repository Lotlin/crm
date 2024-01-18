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

const inputSearchControl = async () => {
  inputSearch.addEventListener('change', () => {
    setTimeout(async () => {
      const url = inputSearch.value;

      await fetchRequest(url, {
        callback: renderMainGoods,
      });
    }, timeOut);

    inputSearch.value = '';
  });
};

const hideGoodPreviewImg = (elem) => {
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
