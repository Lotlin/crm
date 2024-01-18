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

// toDo пагинация
// todo товаров по 10 на странице
// toDO часть товара обрезается, поправить
// toDO что с id добавляемого товара делать?
// toDO вставлять новый товар в начале таблицы
// toDo pattern debounce
// toDo адаптив
// toDO форма изменения товара все поля формы обязательны для заполнения
// eslint-disable-next-line max-len
// toDO при открытии формы "изменить товар" убирать фото (иначе при повторно нажатии фото есть) или сделать показ фото для всех
// toDo добавить возможность удалять изобажение товара из БД
// eslint-disable-next-line max-len
// toDO проверить, не задваивается ли функционал создания товара/радектирования товара

/* поскольку в главной таблице нет столбца цены со скидкой,
решила сделать так:
- в модальный окнах поле "цена" - цена без скидки
- в модальных окнах "итоговая стоимость" - цена за 1 единицу со скидкой
- в главной таблице "цена" - цена со скидкой
*/
