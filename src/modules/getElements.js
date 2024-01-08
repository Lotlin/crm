const mainPage = document.querySelector('.goods');
export const addGoodButton = mainPage.querySelector('.goods__add-good-button');
export const mainTable = mainPage.querySelector('.goods__table');
export const delGood = mainTable.querySelector('.goods__del');
export const totalPriceElem = mainPage.querySelector('.goods__total-num');


export const getGoodsTotalPrices = () =>
  mainTable.querySelectorAll('.goods__table-total-price');
