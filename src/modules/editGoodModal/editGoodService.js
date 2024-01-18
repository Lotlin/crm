import {
  editGoodPreviewImgWrapper, editGoodPreviewImg, editGoodAddImgInputElem,
  editGoodIdELem, editGoodTitleElem, editGoodModaUnitsElem,
  editGoodModalDiscountCheckboxElem, editGoodModalCategoryElem,
  editGoodDiscountElem, editGoodModalDescriptionElem, editGoodModalCountElem,
  editGoodModalPriceElem, editGoodModalTotalPriceElem, editGoodModalForm,
} from './editGoodModalGetElements';
import {currency} from '../data';
import {showGoodPreviewImg} from '../control';
import {
  setSrcFromData, getFullPriceFromDiscounted, getDiscountSum,
  getDiscountedPrice,
} from '../util';

export const fillEditGoodModal = (data) => {
  editGoodAddImgInputElem.setAttribute('data-pic', data.image);
  editGoodIdELem.textContent = data.id;
  editGoodTitleElem.value = data.title;
  editGoodModalCategoryElem.value = data.category;
  editGoodModaUnitsElem.value = data.units;
  editGoodModalDiscountCheckboxElem.setAttribute('checked', true);
  editGoodDiscountElem.value = data.discount ? data.discount : 0;
  editGoodModalDescriptionElem.value = data.description;
  editGoodModalCountElem.value = data.count;
  // show full price
  editGoodModalPriceElem.value =
    getFullPriceFromDiscounted(data.price, data.discount);
  editGoodModalTotalPriceElem.textContent = `${currency}${data.price}`;

  const watchedElements = [
    editGoodModalPriceElem.name,
    editGoodDiscountElem.name,
  ];

  editGoodModalForm.addEventListener('change', e => {
    if (watchedElements.includes(e.target.name)) {
      const discountSum =
        getDiscountSum(
            editGoodModalPriceElem.value, editGoodDiscountElem.value);
      const totalPrice =
        getDiscountedPrice(editGoodModalPriceElem.value, discountSum);
      editGoodModalTotalPriceElem.textContent = `${currency}${totalPrice}`;
    }
  });

  if (data.image && data.image !== 'image/notimage.jpg') {
    setSrcFromData(editGoodPreviewImg, data.image);
    showGoodPreviewImg(editGoodPreviewImgWrapper);
  }
};

export const createEditedGood = (newGoodData) => {
  const title = newGoodData.editGoodTitle;
  const description = newGoodData.editGoodDescription;
  const category = newGoodData.editGoodCategory;
  const units = newGoodData.editGoodUnits;
  const count = Number(newGoodData.editGoodAmount);
  const discountPercent = Number(newGoodData.editGoodDiscountInput);
  const fullPrice = newGoodData.editGoodPrice;

  const discountSize = getDiscountSum(fullPrice, discountPercent);
  const discountedPrice = getDiscountedPrice(fullPrice, discountSize);

  // main table doesn't have column for discountedPrice
  const price = Number(discountedPrice);
  const image = newGoodData.images;

  const newGood = {
    title,
    description,
    price,
    discount: discountPercent,
    count,
    units,
    image,
    category,
  };

  return newGood;
};
