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
import {getFormData} from '../util';


const openAddGoodModal = async () => {
  addGoodButton.addEventListener('click', () => {
    addGoodModal.classList.add('add-good--visible');
    goodTotalPrice.textContent = `${currency} 0`;
  });
};

const closeAddGoodModal = (addGood = false) => {
  addGoodModalCloseButton.addEventListener('click', () => {
    addGoodModal.classList.remove('add-good--visible');
  });

  addGoodModalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === addGoodModalOverlay) {
      addGoodModal.classList.remove('add-good--visible');
    }
  });

  if (addGood) {
    addGoodModal.classList.remove('add-good--visible');
  }
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
    const newGoodData = getFormData(e.target);
    const newGood = createNewGood(newGoodData);
    const newRow = renderRow(newGood);
    mainTable.appendChild(newRow);
    e.target.reset();
    closeAddGoodModal('addGood');
  });
};

export const addGoodModalControl = () => {
  openAddGoodModal();
  closeAddGoodModal();
  addGoodModalFormControl();
  showAddingGoodTotalPrice();
};
