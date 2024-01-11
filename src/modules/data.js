/* eslint-disable max-len */
export const currency = '$';
// used in getAllGoodsTotalPrice();
export const currencyNumOfCharscters = 1;

export const namesOfTableColums = [
  'id', 'title', 'category', 'units', 'count', 'price', 'image', 'images',
];

export const mainTableictureWidth = 600;
export const mainTableictureHeight = 600;

const ApiUrl = 'http://localhost:3000';
export const getGoodsUrl = `${ApiUrl}/api/goods`;
export const delGoodUrl = `${ApiUrl}/api/goods/`; // + {id};
export const getGoodDataUrl = `${ApiUrl}/api/goods/`; // + {id};
