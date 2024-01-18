export const editGoodModal = document.querySelector('.edit-good');
export const editGoodModalOverlay =
  document.querySelector('.edit-good__overlay');
export const editGoodModalForm =
  editGoodModalOverlay.querySelector('.edit-good-form');
export const editGoodAddImgInputElem =
  editGoodModalOverlay.querySelector('.edit-good-form__img-input');
export const editGoodIdELem =
  editGoodModalOverlay.querySelector('.edit-good-id-numbers');
export const editGoodPreviewImg =
  editGoodModalOverlay.querySelector('.edit-good-form__img-preview');
export const editGoodPreviewImgWrapper =
  editGoodModalOverlay.querySelector('.edit-good-form__img-preview-wrapper');
export const editGoodMessageErrGoodImgMaxSize =
  editGoodModalForm.querySelector('.edit-good-form__error-img-size');
export const editGoodpreviewImgDel =
  editGoodModalOverlay.querySelector('.edit-good-form__img-preview-del');
export const editGoodModalCloseButton =
  editGoodModalOverlay.querySelector('.edit-good__close-button');
export const editGoodTitleElem =
  editGoodModalOverlay.querySelector('[name=editGoodTitle]');
export const editGoodModalCategoryElem =
  editGoodModalOverlay.querySelector('[name=editGoodCategory]');
export const editGoodModaUnitsElem =
  editGoodModalOverlay.querySelector('[name=editGoodUnits]');
export const editGoodModalDiscountCheckboxElem =
  editGoodModalOverlay.querySelector('.edit-good__discount-checkbox');
export const editGoodDiscountElem =
  editGoodModalOverlay.querySelector('[name=editGoodDiscountInput]');
export const editGoodModalDescriptionElem =
  editGoodModalOverlay.querySelector('[name=editGoodDescription]');
export const editGoodModalCountElem =
  editGoodModalOverlay.querySelector('[name=editGoodAmount]');
export const editGoodModalPriceElem =
  editGoodModalOverlay.querySelector('[name=editGoodPrice]');
export const editGoodModalTotalPriceElem =
  editGoodModalOverlay.querySelector('.edit-good__total-num');
/*
export const getEditGoodModalElements = () => {
  const overlay = document.querySelector('.edit-good__overlay');
  const id = overlay.querySelector('.edit-good-id-numbers');
  const closeButton = overlay.querySelector('.edit-good__close-button');
  const form = overlay.querySelector('.edit-good-form');
  const title = overlay.querySelector('[name=editGoodTitle]');
  const category = overlay.querySelector('[name=editGoodCategory]');
  const units = overlay.querySelector('[name=editGoodUnits]');
  const discountCheckbox =
    overlay.querySelector('.edit-good__discount-checkbox');
  const discount = overlay.querySelector('[name=editGoodDiscountInput]');
  const description = overlay.querySelector('[name=editGoodDescription]');
  const count = overlay.querySelector('[name=editGoodAmount]');
  const price = overlay.querySelector('[name=editGoodPrice]');
  const totalPrice = overlay.querySelector('.edit-good__total-num');
  const addImgInput = overlay.querySelector('.edit-good-form__img-input');
  // const addGoodButton = overlay.querySelector('.edit-good-form-button');

  return {
    overlay,
    id,
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
    // addGoodButton,
  };
};
*/
