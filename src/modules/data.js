/* eslint-disable max-len */
export const currency = '$';
// used in getAllGoodsTotalPrice();
export const currencyNumOfCharscters = 1;

export const namesOfTableColums = [
  'id', 'title', 'category', 'units', 'count', 'price', 'image', 'images',
];

export const mainTableictureWidth = 600;
export const mainTableictureHeight = 600;

export const getGoodsUrl = 'http://localhost:3000/api/goods';

export const goods = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 3,
    'price': 27000,
    'images': {
      'small': 'img/goods/dishwasher.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 5,
    'price': 25,
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 6,
    'price': 3000,
    'images': 'img/goods/oven.jpg',
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 9,
    'price': 15,
  },
];
