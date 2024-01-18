import {
  getDiscountSum, getDiscountedPrice, getTotalPrice,
} from '../util';


export const createNewGood = (newGoodData) => {
  const id = Date.parse(new Date());
  const title = newGoodData.addGoodTitle;
  const category = newGoodData.addGoodCategory;
  const units = newGoodData.addGoodUnits;
  const count = Number(newGoodData.addGoodAmount);
  const fullPrice = newGoodData.addGoodPrice;
  const discount = Number(newGoodData.addGoodDiscountInput);
  const description = newGoodData.addGoodescription;

  const discountSize =
    getDiscountSum(fullPrice, discount);
  const discountedPrice = getDiscountedPrice(fullPrice, discountSize);
  const totalPrice = getTotalPrice(discountedPrice, count);
  // main table doesn't have column for discountedPrice
  const price = discountedPrice;

  const image = newGoodData.images;

  const newGood = {
    id,
    title,
    category,
    units,
    count,
    price,
    totalPrice,
    image,
    discount,
    description,
  };

  return newGood;
};
