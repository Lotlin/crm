import {
  errModal, errModalCloseButton, errModalOverlay,
} from './errModalGetElements';

export const errModalOpen = () => {
  errModal.classList.add('error-modal--visible');
};

const errModalClose = () => {
  errModalCloseButton.addEventListener('click', () => {
    errModal.classList.remove('error-modal--visible');
  });

  errModalOverlay.addEventListener('click', e => {
    if (e.target === errModalOverlay) {
      errModal.classList.remove('error-modal--visible');
    }
  });
};

export const errModalControl = () => {
  errModalClose();
};
