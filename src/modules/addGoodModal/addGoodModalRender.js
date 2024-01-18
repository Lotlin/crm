import {
  price, discount, addGoodModalForm, goodTotalPrice,
} from './addGoodModalGetElements';
import {getDiscountSum, getDiscountedPrice} from '../util';
import {currency} from '../data';

export const showAddingGoodTotalPrice = () => {
  const watchedElements = [
    price.name,
    discount.name,
  ];

  addGoodModalForm.addEventListener('change', e => {
    if (watchedElements.includes(e.target.name)) {
      const discountSum = getDiscountSum(price.value, discount.value);
      const totalPrice = getDiscountedPrice(price.value, discountSum);

      goodTotalPrice.textContent = `${currency}${totalPrice}`;
    }
  });
};
