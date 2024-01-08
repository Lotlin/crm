import {mainTable, getGoodsTotalPrices} from './getElements';
import {goods, currencyNumOfCharscters} from './data';
import {showAllGoodsTotalPrice} from './render';
import {getPictureWindowPosition} from './util';
import {openEditGoodModal} from './editGoodModal/editGoodModalControl';

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
      target.closest('.good').remove();
      const idDeleted = target.closest('.good').childNodes[0].innerText;
      for (let i = 0; i < goods.length; i++) {
        if (String(goods[i].id) === idDeleted) {
          goods.splice(i, 1);
        }
      }
      showAllGoodsTotalPrice();
      console.log(goods);
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


