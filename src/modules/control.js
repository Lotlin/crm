import {
  deleteGood, showGoodPicture, editGood, fetchRequest,
} from './service';
import {loadGoods, renderMainGoods} from './render';
import {mainTablePicWidth, mainTablePicHeight, timeOut} from './data';
import {mainTable, inputSearch} from './getElements';

const inputSearchControl = async () => {
  inputSearch.addEventListener('change', () => {
    setTimeout(async () => {
      const url = inputSearch.value;

      await fetchRequest(url, {
        callback: renderMainGoods,
      });
    }, timeOut);

    inputSearch.value = '';
  });
};


export const mainTableControl = () => {
  loadGoods();
  deleteGood();
  // showAllGoodsTotalPrice();
  showGoodPicture(mainTable, mainTablePicWidth, mainTablePicHeight);
  editGood();
  inputSearchControl();
};
