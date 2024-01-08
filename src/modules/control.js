import {deleteGood} from './service';
import {renderMainGoods, showAllGoodsTotalPrice} from './render';
import {goods, mainTableictureWidth, mainTableictureHeight} from './data';
import {getPictureWindowPosition} from './util';
import {mainTable} from './getElements';

const showGoodPicture =
  (mainTable, mainTableictureWidth, mainTableictureHeight) => {
    mainTable.addEventListener('click', e => {
      const target = e.target;
      if (target.hasAttribute('data-pic')) {
        const link = target.getAttribute('data-pic');
        const picturePosition =
          getPictureWindowPosition(mainTableictureWidth, mainTableictureHeight);
        open(`${link}`, '',
            `popup ${picturePosition},
            width=${mainTableictureWidth}, height=${mainTableictureHeight}`,
        );
      }
    });
  };

export const mainTableControl = () => {
  renderMainGoods(goods);
  deleteGood();
  showAllGoodsTotalPrice();
  showGoodPicture(mainTable, mainTableictureWidth, mainTableictureHeight);
};
