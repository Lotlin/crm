export const getDiscountSum = (priceInputValue, discountInputValue) =>
  (Number(priceInputValue) * Number(discountInputValue)) / 100;

export const getDiscountedPrice = (priceInputValue, dicsountSum) =>
  Number(priceInputValue) - Number(dicsountSum);

export const getTotalPrice = (discountedPrice, amountInputValue) =>
  discountedPrice * Number(amountInputValue);
