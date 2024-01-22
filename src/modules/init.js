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

/* поскольку в главной таблице нет столбца цены со скидкой,
решила сделать так:
- в модальный окнах поле "цена" - цена без скидки
- в модальных окнах "итоговая стоимость" - цена за 1 единицу со скидкой
- в главной таблице "цена" - цена со скидкой
*/
