export const getDiscountSum = (priceInputValue, discountInputValue) => {
  const discountSum = Number(discountInputValue) ?
   ((Number(priceInputValue) * Number(discountInputValue)) / 100) : 0;
  return discountSum;
};

export const getDiscountedPrice = (priceInputValue, dicsountSum) =>
  Number(priceInputValue) - Number(dicsountSum);

export const getTotalPrice = (discountedPrice, amountInputValue) =>
  discountedPrice * Number(amountInputValue);
