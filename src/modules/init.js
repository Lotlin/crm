import {mainTableControl} from './control';
import {addGoodModalControl} from './addGoodModal/addGoodModalControl';
import {editGoodModalControl} from './editGoodModal/editGoodModalControl';


export const init = () => {
  mainTableControl();
  addGoodModalControl();
  editGoodModalControl();
};

// toDo проверить расчёты цен (+ после отправки данных/получения от сервера);
// toDO каждая ф-я выполнчет 1 действие;
// toDO округление цены;
