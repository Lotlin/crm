/* eslint-disable max-len */
export const currency = '$';
// used in getAllGoodsTotalPrice();
export const currencyNumOfCharscters = 1;

export const namesOfTableColums = [
  'id', 'title', 'category', 'units', 'count', 'price', 'image', 'images',
];

export const timeOut = 3000;

export const mainTablePicWidth = 600;
export const mainTablePicHeight = 600;

export const goodImgMaxSize = 1000000;

export const imgSrcAttribute = 'data-pic';

// toDO удалить повторяющиеся значение
const ApiUrl = 'http://localhost:3000';
export const getGoodsUrl = `${ApiUrl}/api/goods`;
export const goodUrl = `${ApiUrl}/api/goods/`; // + {id};
export const categoryUrl = `${ApiUrl}/api/categories`;
// export const getDiscountedGoodsUrl = `${ApiUrl}/api/discount`;
export const delGoodUrl = `${ApiUrl}/api/goods/`; // + {id};
export const getGoodDataUrl = `${ApiUrl}/api/goods/`; // + {id};
