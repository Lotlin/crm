import {
  mainTable, getGoodsTotalPrices, getTableRowElements,
} from './getElements';
import {apiMainUrl, categoryUrl, currency} from './data';
import {
  getPictureWindowPosition, getDiscountSum, getDiscountedPrice, getTotalPrice,
} from './util';
import {openEditGoodModal} from './editGoodModal/editGoodModalControl';
import {
  delGoodModalOpen, delGoodModalClose, delGoodConfirmed,
} from './delGoodModal/delGoodModalControl';
import {delGoodModalButtons} from './delGoodModal/delGoodModalGetElements';
import {fillEditGoodModal} from './editGoodModal/editGoodService';
import {showError} from './errModal/errModalService';
import {renderDatalistOption} from './render';

export const fetchRequest = async (url, {
  method = 'GET',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);

    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();

      if (callback) callback(data);

      return;
    }

    if (response.status === 404 || response.status === 402 ||
        (response.status > 500 && response.status <= 599)) {
      showError(response.status, response.statusText);

      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    showError(new Error(err));
  }
};

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.addEventListener('loadend', () => {
    resolve(reader.result);
  });

  reader.addEventListener('error', err => {
    reject(err);
  });

  reader.readAsDataURL(file);
});

export const calculateTotalGoodsCost = (amountStr, priceStr) => {
  const result = Number(amountStr) * Number(priceStr);

  return result;
};

export const getAllGoodsTotalPrice = () => {
  const allPricesTextContent = getGoodsTotalPrices();
  let sumAllPrices = 0;

  allPricesTextContent.forEach(elem => {
    const price = Number(elem.textContent.slice(currency.length));
    sumAllPrices += price;
  });

  return sumAllPrices;
};

export const deleteGood = () => {
  mainTable.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.goods__del')) {
      delGoodModalOpen();
      delGoodModalClose();
      delGoodModalButtons.addEventListener('click', e => {
        if (delGoodConfirmed(e)) {
          target.closest('.good').remove();
          const idDeleted = target.closest('.good').childNodes[0].innerText;
          const url = `${apiMainUrl}/${idDeleted}`;
          fetchRequest(url, {
            method: 'DELETE',
          });
          delGoodModalClose('cancellation');
          location.reload();
        } else {
          delGoodModalClose('cancellation');
          location.reload();
        }
      });
    }
  });
};

export const showGoodPicture =
  (mainTable, mainTablePicWidth, mainTablePicHeight) => {
    mainTable.addEventListener('click', e => {
      const target = e.target;

      if (target.hasAttribute('data-pic')) {
        const link = target.getAttribute('data-pic');
        const picturePosition =
          getPictureWindowPosition(mainTablePicWidth, mainTablePicHeight);
        open(`${link}`, '',
            `popup ${picturePosition},
            width=${mainTablePicWidth}, height=${mainTablePicHeight}`,
        );
      }
    });
  };

const getEditedGoogId = (target) => {
  const good = target.closest('.good');
  const goodId = good.querySelector('.goods__table-id').textContent;

  return goodId;
};

const fillEditGoodModalGoodData = async (goodId) => {
  const url = `${apiMainUrl}/${goodId}`;

  await fetchRequest(url, {
    callback: fillEditGoodModal,
  });
};

const getEditedGoodMainTableElements = (target) => {
  const goodRow = target.closest('.good');
  const goodMaintableElements = getTableRowElements(goodRow);

  const titleElem = goodMaintableElements.titleElem;
  const categoryElem = goodMaintableElements.categoryElem;
  const unitsElem = goodMaintableElements.unitsElem;
  const countElem = goodMaintableElements.countElem;
  const priceElem = goodMaintableElements.priceElem;
  const totalPriceElem = goodMaintableElements.totalPriceElem;

  return {
    titleElem,
    categoryElem,
    unitsElem,
    countElem,
    priceElem,
    totalPriceElem,
  };
};

export const editGood = () => {
  mainTable.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.goods__table-button-edit')) {
      const editedGoodId = getEditedGoogId(target);
      openEditGoodModal();
      fillEditGoodModalGoodData(editedGoodId);
      getEditedGoodMainTableElements(target);
    }
  });
};

export const fillEditedGoodTr = (tr, newData) => {
  const trElems = getTableRowElements(tr);

  trElems.titleElem.textContent = newData.editGoodTitle;
  trElems.categoryElem.textContent = newData.editGoodCategory;
  trElems.unitsElem.textContent = newData.editGoodUnits;
  trElems.countElem.textContent = newData.editGoodAmount;

  const discountSum =
    getDiscountSum(newData.editGoodPrice, newData.editGoodDiscountInput);
  const discountedPrice =
    getDiscountedPrice(newData.editGoodPrice, discountSum);
  const totalPrice =
    getTotalPrice(discountedPrice, newData.editGoodAmount);

  // mainTable has only 1 column for price
  trElems.priceElem.textContent = `${currency}${discountedPrice}`;
  trElems.totalPriceElem.textContent = `${currency}${totalPrice}`;
};

export const getCategoriesServer = async () => {
  await fetchRequest(categoryUrl, {
    callback: renderDatalistOption,
  });
};
