import {
  addGoodModalControl,
} from './addGoodModal/addGoodModalControl';
import {renderMainGoods} from './render';
import {goods} from './data';

export const init = () => {
  addGoodModalControl();
  renderMainGoods(goods);
};
