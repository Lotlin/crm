export const addGoodModal = document.querySelector('.add-good');
export const addGoodModalCloseButton =
  addGoodModal.querySelector('.add-good__close-button');
export const addGoodModalOverlay =
  addGoodModal.querySelector('.add-good__overlay');
export const goodTotalPrice =
  addGoodModal.querySelector('.add-good__total-num');
export const addGoodModalForm = addGoodModal.querySelector('.add-good__form');
export const addGoodModalFormDiscountCheckbox =
  addGoodModalForm.querySelector('.form__discount-checkbox-input');
export const addGoodModalFormDiscountInput =
  addGoodModalForm.querySelector('.form__discount-input');

export const getModalElements = () => {
  const overlay = document.querySelector('.add-good__container');
  const id = overlay.querySelector('.add-good-id');
  const closeButton = overlay.querySelector('.add-good__close-button');
  const form = overlay.querySelector('.add-good__form');
  const title = overlay.querySelector('[name=title]');
  const category = overlay.querySelector('[name=category]');
  const units = overlay.querySelector('[name=units]');
  const discountCheckbox =
    overlay.querySelector('.form__discount-checkbox-input');
  const discount = overlay.querySelector('[name=discountInput]');
  const description = overlay.querySelector('[name=description]');
  const count = overlay.querySelector('[name=amount]');
  const price = overlay.querySelector('[name=price]');
  const totalPrice = overlay.querySelector('.add-good__total-num');
  const addImgInput = overlay.querySelector('.form__adding-good-input');
  const previewImgWrapper =
    overlay.querySelector('.form__adding-good-img-wrap');
  const previewImg = overlay.querySelector('.form__adding-good-img-preview');
  const priewImgDel =
    overlay.querySelector('.form__adding-good-img-preview-del');
  const messageErrPreviewSize =
    overlay.querySelector('.form__adding-good-error-img-size');

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
    previewImgWrapper,
    previewImg,
    priewImgDel,
    messageErrPreviewSize,
  };
};
