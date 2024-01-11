import {
  getDiscountSum, getDiscountedPrice, getTotalPrice,
} from './addGoodModalUtil';


export const createNewGood = (newGoodData) => {
  const id = Date.parse(new Date());
  const title = newGoodData.addGoodTitle;
  const category = newGoodData.addGoodCategory;
  const units = newGoodData.addGoodUnits;
  const count = newGoodData.addGoodAmount;
  const fullPrice = newGoodData.addGoodPrice;

  const discountSize =
    getDiscountSum(fullPrice, newGoodData.addGoodDiscountInput);
  const discountedPrice = getDiscountedPrice(fullPrice, discountSize);
  const totalPrice = getTotalPrice(discountedPrice, count);
  // main table doesn't have column for discountedPrice
  const price = discountedPrice;

  const image = newGoodData.addGoodImages;

  const newGood = {
    id, title, category, units, count, price, totalPrice, image,
  };

  return newGood;
};

