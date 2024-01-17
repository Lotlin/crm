import {mainTableControl} from './control';
import {addGoodModalControl} from './addGoodModal/addGoodModalControl';
import {editGoodModalControl} from './editGoodModal/editGoodModalControl';
import {errModalControl} from './errModal/errModalControl';
import {getCategoriesServer} from './service';


export const init = () => {
  mainTableControl();
  addGoodModalControl();
  editGoodModalControl();
  errModalControl();
  getCategoriesServer();
};

// toDo проверить расчёты цен (+ после отправки данных/получения от сервера);
// toDO каждая ф-я выполнчет 1 действие;
// toDO округление цены;
// toDo пагинация
// todo товаров по 10 на странице
// toDO часть товара обрезается, поправить
// toDO что с id добавляемого товара делать?
// toDO вставлять новый товар в начале таблицы
// toDo pattern debounce
// toDo адаптив
// toDO проверка типов загружаемых файлов
// toDo проверить валидатором html
// toDo проверить, нужны ли функции для получения элементов модальных окон
// toDo закрывать модальное окно с ошибкой (эчто-то пошло не так)
// toDo убрать ф-и getAddGoodModalElements и getEditGoodModalElements
// toDO форма изменения товара все поля формы обязательны для заполнения
// eslint-disable-next-line max-len
// toDO форма изменения товара добавить функцию - показать итоговую стоимость изменяемых товаров
// toDo сообщение об ошибке на откуртом окне
// eslint-disable-next-line max-len
// toDO при открытии формы "изменить товар" убирать фото (иначе при повторно нажатии фото есть) или сделать показ фото для всех
// toDo добавить возможность удалять изобажение товара из БД
