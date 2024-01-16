import {
  editGoodModal, getEditGoodModalElements, editGoodModalForm,
  editGoodAddImgInputElem, editGoodIdELem, editGoodPreviewImgWrapper,
  editGoodPreviewImg, editGoodAddImgInput, addGoodMessageErrGoodImgMaxSize,
  editGoodpreviewImgDel,
} from './editGoodModalGetElements';
import {
  getFormData, getUrlWithGoodId, isInputContainFile, isImgFileSizeCorrect,
  setPreviewImgSrc, cleanInput,
} from '../util';
import {createEditedGood} from './editGoodService';
import {getMainTableEditedGoodElementTr} from '../getElements';
import {fetchRequest, fillEditedGoodTr} from '../service';
import {goodUrl, imgSrcAttribute, goodImgMaxSize} from '../data';

export const openEditGoodModal = () => {
  editGoodModal.classList.add('edit-good--visible');
};

const closeEditGoodModal = (goodEdited = false) => {
  const editGoodModalElements = getEditGoodModalElements();
  const editGoodModalCloseButton = editGoodModalElements.closeButton;
  const editGoodModalOverlay = editGoodModalElements.overlay;

  editGoodModalCloseButton.addEventListener('click', () => {
    editGoodModal.classList.remove('edit-good--visible');
  });

  editGoodModalOverlay.addEventListener('click', e => {
    if (e.target === editGoodModalOverlay) {
      editGoodModal.classList.remove('edit-good--visible');
    }
  });

  if (goodEdited) {
    editGoodModal.classList.remove('edit-good--visible');
  }
};

const isGoodDataHasImage = (data) => data.hasImage;

const isElemHasSrcAttribute =
  (elem, imgSrcAttribute) => elem.hasAttribute(imgSrcAttribute);

const setPrevDataImgSrc = (elem, data) => {
  data.images = isElemHasSrcAttribute(elem, imgSrcAttribute) ?
  elem.getAttribute(imgSrcAttribute) : null;
};

const getIdEditedElem = () => editGoodIdELem.textContent;

const editGoodModalFormControl = () => {
  editGoodModalForm.addEventListener('submit', async e => {
    e.preventDefault();
    const editedGoodData = await getFormData(e.target);

    if (!isGoodDataHasImage(editedGoodData)) {
      setPrevDataImgSrc(editGoodAddImgInputElem, editedGoodData);
    }

    fillEditedGoodTr(
        getMainTableEditedGoodElementTr(getIdEditedElem()),
        editedGoodData);

    fetchRequest(getUrlWithGoodId(goodUrl, getIdEditedElem()), {
      method: 'PATCH',
      body: createEditedGood(editedGoodData),
    });

    closeEditGoodModal('goodEdited');
  });
};

const showEditGoodPreviewImg = () => {
  editGoodPreviewImgWrapper.classList
      .add('edit-good-form__img-preview-wrapper--visible');
};

const showEditGoodErrorSizeMessage = () => {
  addGoodMessageErrGoodImgMaxSize.classList.
      add('edit-good-form__error-img-size--visible');
};

const editGoodAddImgInputControl = () => {
  editGoodAddImgInput.addEventListener('change', () => {
    if (isInputContainFile(editGoodAddImgInput)) {
      if (isImgFileSizeCorrect(editGoodAddImgInput, goodImgMaxSize)) {
        setPreviewImgSrc(editGoodPreviewImg, editGoodAddImgInput);
        showEditGoodPreviewImg();
      } else {
        showEditGoodErrorSizeMessage();
        return true;
      }
    }
  });
};

const hideEditGoodPreviewImg = () => {
  editGoodPreviewImgWrapper.classList.
      remove('edit-good-form__img-preview-wrapper--visible');
};

const delEditGoodPreviewImgControl = () => {
  editGoodpreviewImgDel.addEventListener('click', () => {
    hideEditGoodPreviewImg();
    cleanInput(editGoodAddImgInput);
  });
};

const showEditGoodImgPreviewControl = () => {
  editGoodAddImgInputControl();
  delEditGoodPreviewImgControl();
};

export const editGoodModalControl = () => {
  closeEditGoodModal();
  editGoodModalFormControl();
  showEditGoodImgPreviewControl();
};
