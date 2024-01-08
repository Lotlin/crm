import {
  addGoodModalControl,
} from './addGoodModal/addGoodModalControl';
import {mainTableControl} from './control';

export const init = () => {
  addGoodModalControl();
  mainTableControl();
};
