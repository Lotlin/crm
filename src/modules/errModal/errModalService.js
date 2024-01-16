import {errModalOpen} from './errModalControl';
import {errModalTitle} from './errModalGetElements';

export const showError = (err = '', data = '') => {
  if (!err && !data) {
    errModalOpen();
    errModalTitle.textContent = `Что-то пошло не так...`;
    return;
  }

  console.warn(err, data);
  errModalOpen();
  errModalTitle.textContent = `${err} ${data}`;
};
