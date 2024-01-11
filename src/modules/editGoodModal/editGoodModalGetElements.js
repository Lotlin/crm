export const editGoodModal = document.querySelector('.edit-good');

export const getEditGoodModalElements = () => {
  const overlay = document.querySelector('.edit-good__overlay');
  const id = overlay.querySelector('.edit-good-id-numbers');
  const closeButton = overlay.querySelector('.edit-good__close-button');
  const form = overlay.querySelector('.edit-good__form');
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
  // const addGoodButton = overlay.querySelector('.edit-good-form__button');

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
