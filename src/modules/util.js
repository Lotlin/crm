import {toBase64} from './service';
import {tbodyMainTable} from './getElements';

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

  tableData.hasImage = img.size ? 1 : 0;

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

export const cleanMainTable = () => {
  tbodyMainTable.innerHTML = '';
};

export const isImgFileSizeCorrect = (input, maxImgSize) =>
  input.files[0].size < maxImgSize;

export const getPreviewImgSrc = (inputFile) => {
  const src = URL.createObjectURL(inputFile.files[0]);

  return src;
};

export const setPreviewImgSrc = (imgInput, inputFile) => {
  imgInput.src = getPreviewImgSrc(inputFile);
};

export const isInputContainFile = (input) => input.files.length;

export const cleanInput = (input) => {
  input.value = '';
};

export const getUrlWithGoodId = (url, goodId) => `${url}/${goodId}`;

export const setSrcFromData = (imgElem, data) => imgElem.src = data;

export const getFullPriceFromDiscounted = (discountedPrice, discount) =>
  (Number(discountedPrice) / (100 - Number(discount))) * 100;

const roundNum = num => Math.round(num * 100) / 100;

export const getDiscountSum = (priceInputValue, discountInputValue) => {
  const discountSum = Number(discountInputValue) ?
    ((Number(priceInputValue) * Number(discountInputValue)) / 100) : 0;

  return roundNum(discountSum);
};

export const getDiscountedPrice = (priceInputValue, dicsountSum) =>
  roundNum(Number(priceInputValue) - Number(dicsountSum));

export const getTotalPrice = (discountedPrice, amountInputValue) =>
  roundNum(Number(discountedPrice) * Number(amountInputValue));
