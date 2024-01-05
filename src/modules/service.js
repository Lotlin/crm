import {getPictureWindowPosition} from './util';

export const calculateTotalGoodsCost = (amountStr, priceStr) => {
  const result = Number(amountStr) * Number(priceStr);

  return result;
};
/*
export const showGoodPicture = (mainTable, pictureWidth, pictureHeigth) => {
  mainTable.addEventListener('click', e => {
    const target = e.target;
    if (target.hasAttribute('data-pic')) {
      const link = target.getAttribute('data-pic');
      const picturePosition =
        getPictureWindowPosition(pictureWidth, pictureHeigth);
      open(`${link}`, '',
          `popup ${picturePosition},
          width=${pictureWidth}, height=${pictureHeigth}`,
      );
    }
  });
};
*/