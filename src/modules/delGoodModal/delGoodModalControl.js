import {
  delGoodModal, delGoodModalOverlay, delGoodModalCloseButton,
  delGoodModalButtonYes,
} from './delGoodModalGetElements';

export const delGoodModalOpen = () => {
  delGoodModal.classList.add('del-good-modal--visible');
};

export const delGoodModalClose = (cancellation = false) => {
  delGoodModalCloseButton.addEventListener('click', () => {
    delGoodModal.classList.remove('del-good-modal--visible');
  });

  delGoodModalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === delGoodModalOverlay) {
      delGoodModal.classList.remove('del-good-modal--visible');
    }
  });

  if (cancellation) {
    delGoodModal.classList.remove('del-good-modal--visible');
  }
};

export const delGoodConfirmed = (e) => {
  const target = e.target;
  let isConfirmed = false;

  if (target === delGoodModalButtonYes) {
    isConfirmed = true;
  }
  return isConfirmed;
};
