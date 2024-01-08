import {namesOfTableColums, currency, getGoodsUrl} from './data';
import {parsingNestedObject} from './util';
import {mainTable, totalPriceElem} from './getElements';
import {
  calculateTotalGoodsCost, getAllGoodsTotalPrice, fetchRequest,
} from './service';

const renderTotalGoodCost = (elem, amountStr, priceStr) => {
  const calculatedTotalGoodsCost = calculateTotalGoodsCost(amountStr, priceStr);
  elem.insertAdjacentHTML(
      'beforeend',
      // eslint-disable-next-line max-len
      `<td class='goods__table-total-price'>${currency}${calculatedTotalGoodsCost}</td>`,
  );
};

const renderImgString = (imgValue) => {
  let resultHtml = ``;
  if (typeof imgValue === 'object') {
    imgValue = parsingNestedObject(imgValue);
    resultHtml = `
      <td class="goods__table-img">
        <button class="goods__table-button goods__table-button-img
          goods__picture" data-pic="${imgValue[0]}">
        </button>
      </td>`;
  } else if (imgValue === 'image/notimage.jpg' || !imgValue) {
    resultHtml = ` 
      <td class="goods__table-img">
        <button class="goods__table-button goods__table-button-no-img"></button>
      </td>`;
  } else {
    resultHtml = `
      <td class="goods__table-img">
        <button class="goods__table-button goods__table-button-img
          goods__picture" data-pic="${imgValue}">
        </button>
      </td>`;
  }

  return resultHtml;
};

const renderImg = (tableRow, imgStr) => {
  imgStr = renderImgString(imgStr);
  tableRow.insertAdjacentHTML('beforeend', imgStr);
};


const renderEditButton = (elem) => {
  elem.insertAdjacentHTML(
      'beforeend',
      `<td class="goods__table-edit">
        <button class="goods__table-button goods__table-button-edit"></button>
      </td>`,
  );
};

const renderDelButton = (elem) => {
  elem.insertAdjacentHTML(
      'beforeend',
      `<td class="goods__table-cart">
        <button class="goods__table-button goods__del"></button>
      </td>`,
  );
};


export const renderRow = (obj) => {
  const tableRow = document.createElement('tr');
  tableRow.className = 'good';

  const tableColumsAmount = namesOfTableColums.length;
  const keys = Object.keys(obj);

  let count = '';
  let price = '';
  let imgStr = '';

  for (let i = 0; i < tableColumsAmount; i++) {
    for (const key of keys) {
      if (key === namesOfTableColums[i]) {
        if (key === 'count') {
          count = obj[key];
        }

        if (key === 'price') {
          price = obj[key];
        }

        if (key === 'image' || key === 'images') {
          imgStr = obj[key];
        } else if (key === 'price') {
          tableRow.insertAdjacentHTML('beforeend',
              `<td>${currency}${obj[key]}</td>`,
          );
        } else {
          tableRow.insertAdjacentHTML('beforeend',
              `<td>${obj[key]}</td>`,
          );
        }
      }
    }
  }

  renderTotalGoodCost(tableRow, count, price);
  renderImg(tableRow, imgStr);
  renderEditButton(tableRow);
  renderDelButton(tableRow);

  return tableRow;
};

export const renderMainGoods = (arr) => {
  arr.map((item) => {
    const newRow = renderRow(item);
    mainTable.appendChild(newRow);
  });
};

export const showAllGoodsTotalPrice = () => {
  const totalPrice = getAllGoodsTotalPrice();
  totalPriceElem.textContent = `${currency}${totalPrice}`;
};

export const loadGoods = async () => {
  await fetchRequest(getGoodsUrl, {
    callback: renderMainGoods,
  });
};
