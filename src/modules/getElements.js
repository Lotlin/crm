export const body = document.querySelector('body');
const mainPage = document.querySelector('.goods');
export const addGoodButton = mainPage.querySelector('.goods__add-good-button');
export const mainTable = mainPage.querySelector('.goods__table');
export const tbodyMainTable = mainTable.querySelector('.goods__table-body');
export const delGood = mainTable.querySelector('.goods__del');
export const totalPriceElem = mainPage.querySelector('.goods__total-num');
export const inputSearch =
  mainPage.querySelector('.goods__content-search-form-input');

export const getGoodsTotalPrices = () =>
  document.querySelectorAll('.goods__table-total-price');

export const getTableRowElements = (trElem) => {
  const titleElem = trElem.querySelector('.goods__table-title');
  const categoryElem = trElem.querySelector('.goods__table-category');
  const unitsElem = trElem.querySelector('.goods__table-units');
  const countElem = trElem.querySelector('.goods__table-count');
  // discounted price
  const priceElem = trElem.querySelector('.goods__table-price');
  const imgBtnElem = trElem.querySelector('.goods__table-button-img');
  const totalPriceElem = trElem.querySelector('.goods__table-total-price');

  return {
    titleElem,
    categoryElem,
    unitsElem,
    countElem,
    priceElem,
    imgBtnElem,
    totalPriceElem,
  };
};

const getAllIdElems = () => mainTable.querySelectorAll('.goods__table-id');


export const getMainTableEditedGoodElementTr = (id) => {
  let getMainTableEditedGoodElementTr = NaN;
  const AllIdItems = getAllIdElems();
  AllIdItems.forEach(elem => {
    if (elem.textContent === id) {
      getMainTableEditedGoodElementTr = elem.closest('.good');
    }
  });

  return getMainTableEditedGoodElementTr;
};
