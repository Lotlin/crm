import {mainTableControl} from './control';
import {addGoodModalControl} from './addGoodModal/addGoodModalControl';
import {editGoodModalControl} from './editGoodModal/editGoodModalControl';


export const init = () => {
  mainTableControl();
  addGoodModalControl();
  editGoodModalControl();
};
