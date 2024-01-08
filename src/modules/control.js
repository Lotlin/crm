import {deleteGood, showGoodPicture, editGood} from './service';
import {renderMainGoods, showAllGoodsTotalPrice} from './render';
import {goods, mainTableictureWidth, mainTableictureHeight} from './data';

import {mainTable} from './getElements';


export const mainTableControl = () => {
  renderMainGoods(goods);
  deleteGood();
  showAllGoodsTotalPrice();
  showGoodPicture(mainTable, mainTableictureWidth, mainTableictureHeight);
  editGood();
};
