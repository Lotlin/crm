import {
  editGoodModal, getEditGoodModalElements,
} from './editGoodModalGetElements';
import {getFormData} from '../util';
import {createEditedGood} from './editGoodService';
import {getMainTableEditedGoodElementTr} from '../getElements';
import {fetchRequest, fillEditedGoodTr} from '../service';
import {goodUrl} from '../data';

export const openEditGoodModal = () => {
  editGoodModal.classList.add('edit-good--visible');
};

const closeEditGoodModal = (goodEdited = false) => {
  const editGoodModalElements = getEditGoodModalElements();
  const editGoodModalCloseButton = editGoodModalElements.closeButton;
  const editGoodModalOverlay = editGoodModalElements.overlay;

  editGoodModalCloseButton.addEventListener('click', () => {
    editGoodModal.classList.remove('edit-good--visible');
  });

  editGoodModalOverlay.addEventListener('click', e => {
    if (e.target === editGoodModalOverlay) {
      editGoodModal.classList.remove('edit-good--visible');
    }
  });

  if (goodEdited) {
    editGoodModal.classList.remove('edit-good--visible');
  }
};

export const editGoodModalControl = () => {
  closeEditGoodModal();
  // toDO все поля формы обязательны для заполнения

  const editGoodModalForm = getEditGoodModalElements().form;

  editGoodModalForm.addEventListener('submit', e => {
    e.preventDefault();

    const editedGoodData = getFormData(e.target);

    const idElem = getEditGoodModalElements().id;
    const id = idElem.textContent;
    const mainTableEditedGoodTr = getMainTableEditedGoodElementTr(id);

    // ToDO добавить функцию - показать итоговую стоимость изменяемых товаров
    fillEditedGoodTr(mainTableEditedGoodTr, editedGoodData);
    // toDO отправка изменённых данных на сервер
    const serverData = createEditedGood(editedGoodData);
    const url = `${goodUrl}${id}`;

    fetchRequest(url, {
      method: 'PATCH',
      body: serverData,
    });

    // e.target.reset();

    closeEditGoodModal('goodEdited');
  });
};
