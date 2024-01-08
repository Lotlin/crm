import {deleteGood, showGoodPicture, editGood} from './service';
import {loadGoods, showAllGoodsTotalPrice} from './render';
import {mainTableictureWidth, mainTableictureHeight} from './data';

import {mainTable} from './getElements';


export const mainTableControl = () => {
  loadGoods();
  deleteGood();
  showAllGoodsTotalPrice();
  showGoodPicture(mainTable, mainTableictureWidth, mainTableictureHeight);
  editGood();
};
