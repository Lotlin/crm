import {mainTable, getGoodsTotalPrices} from './getElements';
import {currencyNumOfCharscters, delGoodUrl} from './data';
// import {showAllGoodsTotalPrice} from './render';
import {getPictureWindowPosition} from './util';
import {openEditGoodModal} from './editGoodModal/editGoodModalControl';
import {
  delGoodModalOpen, delGoodModalClose, delGoodConfirmed,
} from './delGoodModal/delGoodModalControl';
import {delGoodModalButtons} from './delGoodModal/delGoodModalGetElements';

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
      const goods = data.goods;
      if (callback) callback(goods);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    callback(new Error(err));
  }
};

export const calculateTotalGoodsCost = (amountStr, priceStr) => {
  const result = Number(amountStr) * Number(priceStr);

  return result;
};

export const getAllGoodsTotalPrice = () => {
  const allPricesTextContent = getGoodsTotalPrices();
  let sumAllPrices = 0;

  allPricesTextContent.forEach(elem => {
    const price = Number(elem.textContent.slice(currencyNumOfCharscters));
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
          const url = `${delGoodUrl}${idDeleted}`;
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
      // showAllGoodsTotalPrice();
    }
  });
};

export const showGoodPicture =
  (mainTable, mainTableictureWidth, mainTableictureHeight) => {
    mainTable.addEventListener('click', e => {
      const target = e.target;

      if (target.hasAttribute('data-pic')) {
        const link = target.getAttribute('data-pic');
        const picturePosition =
          getPictureWindowPosition(mainTableictureWidth, mainTableictureHeight);
        open(`${link}`, '',
            `popup ${picturePosition},
            width=${mainTableictureWidth}, height=${mainTableictureHeight}`,
        );
      }
    });
  };

export const editGood = () => {
  mainTable.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.goods__table-button-edit')) {
      openEditGoodModal();
    }
  });
};
