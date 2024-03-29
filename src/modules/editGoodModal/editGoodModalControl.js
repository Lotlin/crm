import {
  editGoodModal, editGoodModalForm,
  editGoodAddImgInputElem, editGoodIdELem, editGoodPreviewImgWrapper,
  editGoodPreviewImg, editGoodMessageErrGoodImgMaxSize,
  editGoodpreviewImgDel, editGoodModalCloseButton, editGoodModalOverlay,
} from './editGoodModalGetElements';
import {getFormData, getUrlWithGoodId} from '../util';
import {createEditedGood} from './editGoodService';
import {getMainTableEditedGoodElementTr} from '../getElements';
import {fetchRequest, fillEditedGoodTr} from '../service';
import {apiMainUrl, imgSrcAttribute} from '../data';
import {
  modalDeleteChoosenImgControl, goodAddImgInputControl,
} from '../control';
import {showAllGoodsTotalPrice} from '../render';

export const openEditGoodModal = () => {
  editGoodModal.classList.add('edit-good--visible');
};

const closeEditGoodModal = (goodEdited = false) => {
  // const editGoodModalElements = getEditGoodModalElements();
  // const editGoodModalCloseButton = editGoodModalElements.closeButton;
  // const editGoodModalOverlay = editGoodModalElements.overlay;

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

    fetchRequest(getUrlWithGoodId(apiMainUrl, getIdEditedElem()), {
      method: 'PATCH',
      body: createEditedGood(editedGoodData),
    });

    closeEditGoodModal('goodEdited');
    showAllGoodsTotalPrice();
  });
};

export const showEditGoodImgPreviewControl = () => {
  goodAddImgInputControl(
      editGoodAddImgInputElem, editGoodPreviewImg,
      editGoodPreviewImgWrapper, editGoodMessageErrGoodImgMaxSize,
  );
  modalDeleteChoosenImgControl(
      editGoodpreviewImgDel, editGoodPreviewImgWrapper, editGoodAddImgInputElem,
  );
};

export const editGoodModalControl = () => {
  closeEditGoodModal();
  editGoodModalFormControl();
  showEditGoodImgPreviewControl();
};
