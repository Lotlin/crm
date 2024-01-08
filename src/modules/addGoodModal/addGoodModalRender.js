import {getAddGoodModalElements} from './addGoodModalGetElements';
import {
  getDiscountSum, getDiscountedPrice, getTotalPrice,
} from './addGoodModalUtil';
import {currency} from '../data';


export const showAddingGoodTotalPrice = () => {
  const priceInput = getAddGoodModalElements().price;
  const amountInput = getAddGoodModalElements().count;
  const discountInput = getAddGoodModalElements().discount;
  const form = getAddGoodModalElements().form;
  const goodTotalPrice = getAddGoodModalElements().totalPrice;

  const watchedElements = [
    priceInput.name,
    amountInput.name,
    discountInput.name,
  ];

  form.addEventListener('change', e => {
    if (watchedElements.includes(e.target.name)) {
      const discountSum = getDiscountSum(priceInput.value, discountInput.value);
      const discountedPrice = getDiscountedPrice(priceInput.value, discountSum);
      const totalPrice = getTotalPrice(discountedPrice, amountInput.value);

      goodTotalPrice.textContent = `${currency}${totalPrice}`;
    }
  });
};

