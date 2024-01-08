import {mainTable, getGoodsTotalPrices} from './getElements';
import {goods, currencyNumOfCharscters} from './data';
import {showAllGoodsTotalPrice} from './render';
import {getPictureWindowPosition} from './util';

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
      console.log(123);
    }
  });
};
