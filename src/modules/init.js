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
// toDo пагинация
// todo товаров по 10 на странице
// toDO часть товара обрезается, поправить
// toDO что с id добавляемого товара делать?
// toDO вставлять новый товар в начале таблицы
