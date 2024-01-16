export const addGoodModal = document.querySelector('.add-good');
export const addGoodModalCloseButton =
  addGoodModal.querySelector('.add-good__close-button');
export const addGoodModalOverlay =
  addGoodModal.querySelector('.add-good__overlay');
export const goodTotalPrice =
  addGoodModal.querySelector('.add-good__total-num');
export const addGoodModalForm = addGoodModal.querySelector('.add-good-form');
export const addGoodModalFormDiscountCheckbox =
  addGoodModalForm.querySelector('.add-good-form__checkbox-input');
export const addGoodModalFormDiscountInput =
  addGoodModalForm.querySelector('.form__discount-input');

const overlay = document.querySelector('.add-good__container');
export const addGoodAddImgInput =
  overlay.querySelector('.add-good-form__img-input');
export const addGoodPreviewImgWrapper =
  overlay.querySelector('.add-good-form__img-preview-wrapper');
export const addGoodPreviewImg =
  overlay.querySelector('.add-good-form__img-preview');
export const addGoodPreviewImgDel =
  overlay.querySelector('.add-good-form__img-preview-del');
export const addGoodMessageErrGoodImgMaxSize =
  addGoodModalForm.querySelector('.add-good-form__error-img-size');

export const getAddGoodModalElements = () => {
  const overlay = document.querySelector('.add-good__container');
  const closeButton = overlay.querySelector('.add-good__close-button');
  const form = overlay.querySelector('.add-good-form');
  const title = overlay.querySelector('[name=addGoodTitle]');
  const category = overlay.querySelector('[name=addGoodCategory]');
  const units = overlay.querySelector('[name=addGoodUnits]');
  const discountCheckbox =
    overlay.querySelector('.add-good-form__checkbox-input');
  const discount = overlay.querySelector('[name=addGoodDiscountInput]');
  const description = overlay.querySelector('[name=addGoodescription]');
  const count = overlay.querySelector('[name=addGoodAmount]');
  const price = overlay.querySelector('[name=addGoodPrice]');
  const totalPrice = overlay.querySelector('.add-good__total-num');
  const addImgInput = overlay.querySelector('.add-good-form__img-input');

  return {
    overlay,
    closeButton,
    form,
    title,
    category,
    units,
    discountCheckbox,
    discount,
    description,
    count,
    price,
    totalPrice,
    addImgInput,
  };
};
