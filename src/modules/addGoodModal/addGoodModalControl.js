import {addGoodButton, mainTable} from '../getElements';
import {
  addGoodModal, addGoodModalCloseButton, addGoodModalOverlay,
  goodTotalPrice, addGoodModalForm, addGoodModalFormDiscountCheckbox,
  addGoodModalFormDiscountInput,
} from './addGoodModalGetElements';
import {currency} from '../data';
import {showAddingGoodTotalPrice} from './addGoodModalRender';
import {createNewGood} from './addGoodModalService';
import {renderRow} from '../render';


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

    const formData = new FormData(e.target);
    const newGoodData = Object.fromEntries(formData);
    const newGood = createNewGood(newGoodData);
    console.log('newGood: ', newGood);
    const newRow = renderRow(newGood);
    mainTable.appendChild(newRow);
    addGoodModal.classList.remove('add-good--visible');
  });
};

export const addGoodModalControl = () => {
  openAddGoodModal();
  closeAddGoodModal();
  addGoodModalFormControl();
  showAddingGoodTotalPrice();
};
