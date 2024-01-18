import {errModal} from './errModalGetElements';

export const errModalOpen = () => {
  errModal.classList.add('error-modal--visible');
};

const errModalClose = () => {
  errModal.classList.remove('error-modal--visible');
};

export const errModalControl = () => {
  errModalOpen();
};
