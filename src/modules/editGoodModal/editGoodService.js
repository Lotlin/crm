import {getEditGoodModalElements} from './editGoodModalGetElements';
import {currency} from '../data';
import {
  getDiscountSum, getDiscountedPrice, getTotalPrice,
} from '../addGoodModal/addGoodModalUtil';

export const fillEditGoodModal = (data) => {
  const elements = getEditGoodModalElements();

  const idelem = elements.id;
  idelem.textContent = data.id;

  const titleElem = elements.title;
  titleElem.value = data.title;

  const categoryElem = elements.category;
  categoryElem.value = data.category;

  const unitsElem = elements.units;
  unitsElem.value = data.units;

  const discountCheckboxElem = elements.discountCheckbox;
  discountCheckboxElem.setAttribute('checked', true);

  const discountInputElem = elements.discount;
  discountInputElem.value = data.discount ? data.discount : 0;

  const descriptionElem = elements.description;
  descriptionElem.value = data.description;

  const countElem = elements.count;
  countElem.value = data.count;

  const priceElem = elements.price;
  priceElem.value = data.price;

  const totalPriceElem = elements.totalPrice;
  const discountSum = getDiscountSum(data.price, data.discount);
  const discountedPrice = getDiscountedPrice(data.price, discountSum);
  const countedTotalPrice = getTotalPrice(discountedPrice, data.count);
  totalPriceElem.textContent = `${currency}${countedTotalPrice}`;
};

// toDo проверить, не задваивается ли функционал
export const createEditedGood = (newGoodData) => {
  // const idElem = getEditGoodModalElements().id.textContent;
  // const id = idElem;
  const title = newGoodData.editGoodTitle;
  const description = newGoodData.editGoodDescription;
  const category = newGoodData.editGoodCategory;
  const units = newGoodData.editGoodUnits;
  const count = Number(newGoodData.editGoodAmount);
  const discountPercent = Number(newGoodData.editGoodDiscountInput);
  const fullPrice = newGoodData.editGoodPrice;

  const discountSize = getDiscountSum(fullPrice, discountPercent);
  const discountedPrice = getDiscountedPrice(fullPrice, discountSize);
  // const totalPrice = getTotalPrice(discountedPrice, count);
  // main table doesn't have column for discountedPrice
  const price = Number(discountedPrice);
  // toDO правильное добавление картинок
  const image = newGoodData.editGoodImages;

  const newGood = {
    title,
    description,
    price,
    discountPercent,
    count,
    units,
    image,
    category,
  };

  return newGood;
};
