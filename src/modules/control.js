import {deleteGood} from './service';
import {showAllGoodsTotalPrice} from './render';

export const mainTableControl = () => {
  deleteGood();
  showAllGoodsTotalPrice();
};
