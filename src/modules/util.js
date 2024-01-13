import {toBase64} from './service';

export const parsingNestedObject = (obj) => {
  const valArr = [];
  const nestedValues = Object.values(obj);
  for (const val of nestedValues) {
    valArr.push(val);
  }

  return valArr;
};

export const getFormData = async (tableElem) => {
  const formData = new FormData(tableElem);
  const tableData = Object.fromEntries(formData);
  let img = '';
  for (const key in tableData) {
    if (typeof tableData[key] === 'object') {
      img = tableData[key];
    }
  }
  if (img.size === 0) {
    tableData.noImg = true;
  }
  // tableData.addGoodImages = await toBase64(tableData.addGoodImages);
  tableData.images = await toBase64(img);

  return tableData;
};

const getScreenSize = () => {
  const screenHeight = screen.height;
  const screenWidth = screen.width;

  return {
    screenHeight,
    screenWidth,
  };
};

export const getPictureWindowPosition = (pictureWidth, pictureHeigth) => {
  const top = (getScreenSize().screenHeight - pictureHeigth) / 2;
  const left = (getScreenSize().screenWidth - pictureWidth) / 2;
  const result = `top=${top}, left=${left}`;

  return result;
};
