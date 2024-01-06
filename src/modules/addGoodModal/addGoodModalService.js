import {
  getDiscountSum, getDiscountedPrice, getTotalPrice,
} from './addGoodModalUtil';


export const createNewGood = (newGoodData) => {
  const id = Date.parse(new Date());
  const title = newGoodData.title;
  const category = newGoodData.category;
  const units = newGoodData.units;
  const count = newGoodData.amount;
  const fullPrice = newGoodData.price;

  const discountSize = getDiscountSum(fullPrice, newGoodData.discountInput);
  const discountedPrice = getDiscountedPrice(fullPrice, discountSize);
  const totalPrice = getTotalPrice(discountedPrice, count);

  const image = newGoodData.images;

  const newGood = {
    id, title, category, units, count, discountedPrice, totalPrice, image,
  };

  return newGood;
};
