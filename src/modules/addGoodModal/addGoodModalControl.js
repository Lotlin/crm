import {addGoodButton} from '../getElements';
import {
  addGoodModal, addGoodModalCloseButton, addGoodModalOverlay,
  goodTotalPrice, addGoodModalForm, addGoodModalFormDiscountCheckbox,
  addGoodModalFormDiscountInput,
} from './addGoodModalGetElements';
import {currency} from '../data';
import {showAddingGoodTotalPrice} from './addGoodModalRender';


const openAddGoodModal = async () => {
  addGoodButton.addEventListener('click', () => {
    addGoodModal.classList.add('add-good--visible');
    goodTotalPrice.textContent = `${currency} 0`;
  });
};

const closeAddGoodModal = () => {
  addGoodModalCloseButton.addEventListener('click', () => {
    addGoodModal.classList.remove('add-good--visible');
  });

  addGoodModalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === addGoodModalOverlay) {
      addGoodModal.classList.remove('add-good--visible');
    }
  });
};

const discountInputControl = () => {
  addGoodModalFormDiscountCheckbox.addEventListener('change', () => {
    if (addGoodModalFormDiscountCheckbox.checked) {
      addGoodModalFormDiscountInput.removeAttribute('disabled');
    } else {
      addGoodModalFormDiscountInput.setAttribute('disabled', '');
      addGoodModalFormDiscountInput.value = '';
    }
  });
};

const addGoodModalFormControl = () => {
  discountInputControl();

  addGoodModalForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(1);
    // const formData = new FormData(e.target);
    // const newGoodData = Object.fromEntries(formData);
  });
};

export const addGoodModalControl = () => {
  openAddGoodModal();
  closeAddGoodModal();
  addGoodModalFormControl();
  showAddingGoodTotalPrice();
};
