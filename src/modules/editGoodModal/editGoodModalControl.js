import {editGoodModal} from './editGoodModalGetElements';

export const openEditGoodModal = () => {
  editGoodModal.classList.add('edit-good--visible');
  // goodTotalPrice.textContent = `${currency} 0`;
};
