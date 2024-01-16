import {addGoodButton, mainTable} from '../getElements';
import {
  addGoodModal, addGoodModalCloseButton, addGoodModalOverlay,
  goodTotalPrice, addGoodModalForm, addGoodModalFormDiscountCheckbox,
  addGoodModalFormDiscountInput, addGoodAddImgInput,
  addGoodMessageErrGoodImgMaxSize, addGoodPreviewImgWrapper, addGoodPreviewImg,
  addGoodPreviewImgDel,
} from './addGoodModalGetElements';
import {currency, getGoodsUrl, goodImgMaxSize} from '../data';
import {showAddingGoodTotalPrice} from './addGoodModalRender';
import {createNewGood} from './addGoodModalService';
import {renderRow, showAllGoodsTotalPrice} from '../render';
import {
  getFormData, isImgFileSizeCorrect, setPreviewImgSrc, cleanInput,
  isInputContainFile,
} from '../util';
import {fetchRequest} from '../service';


const openAddGoodModal = () => {
  addGoodButton.addEventListener('click', () => {
    addGoodModal.classList.add('add-good--visible');
    goodTotalPrice.textContent = `${currency} 0`;
  });
};

const closeAddGoodModal = (addGood = false) => {
  addGoodModalCloseButton.addEventListener('click', () => {
    addGoodModal.classList.remove('add-good--visible');
    addGoodModalForm.reset();
  });

  addGoodModalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === addGoodModalOverlay) {
      addGoodModal.classList.remove('add-good--visible');
      addGoodModalForm.reset();
    }
  });

  if (addGood) {
    addGoodModal.classList.remove('add-good--visible');
    addGoodModalForm.reset();
  }
};

const discountInputControl = () => {
  addGoodModalFormDiscountCheckbox.addEventListener('change', () => {
    if (addGoodModalFormDiscountCheckbox.checked) {
      addGoodModalFormDiscountInput.removeAttribute('disabled');
    } else {
      addGoodModalFormDiscountInput.setAttribute('disabled', '');
      addGoodModalFormDiscountInput.value = '';
    }
  });
};

const addGoodModalFormControl = () => {
  discountInputControl();

  addGoodModalForm.addEventListener('submit', async e => {
    e.preventDefault();
    const newGoodData = await getFormData(e.target);
    const newGood = createNewGood(newGoodData);
    const newRow = renderRow(newGood);
    mainTable.appendChild(newRow);
    showAllGoodsTotalPrice();

    fetchRequest(getGoodsUrl, {
      method: 'POST',
      body: newGood,
    });

    e.target.reset();
    closeAddGoodModal('addGood');
  });
};

const showAddGoodPreviewImg = () => {
  addGoodPreviewImgWrapper.classList
      .add('add-good-form__img-preview-wrapper--visible');
};

const hideAddGoodPreviewImg = () => {
  addGoodPreviewImgWrapper.classList.
      remove('add-good-form__img-preview-wrapper--visible');
};

const showAddGoodErrorSizeMessage = () => {
  addGoodMessageErrGoodImgMaxSize.classList.
      add('add-good-form__error-img-size--visible');
};

const delAddGoodPreviewImgControl = () => {
  addGoodPreviewImgDel.addEventListener('click', () => {
    hideAddGoodPreviewImg();
    cleanInput(addGoodAddImgInput);
  });
};

const addGoodAddImgInputControl = () => {
  addGoodAddImgInput.addEventListener('change', () => {
    if (isInputContainFile(addGoodAddImgInput)) {
      if (isImgFileSizeCorrect(addGoodAddImgInput, goodImgMaxSize)) {
        setPreviewImgSrc(addGoodPreviewImg, addGoodAddImgInput);
        showAddGoodPreviewImg();
      } else {
        showAddGoodErrorSizeMessage();
        return true;
      }
    }
  });
};

const showAddGoodImgPreviewControl = () => {
  addGoodAddImgInputControl();
  delAddGoodPreviewImgControl();
};

export const addGoodModalControl = () => {
  openAddGoodModal();
  closeAddGoodModal();
  addGoodModalFormControl();
  showAddingGoodTotalPrice();
  showAddGoodImgPreviewControl();
};
