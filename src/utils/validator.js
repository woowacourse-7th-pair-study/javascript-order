import { INPUT_REGEX } from '../constants/constants.js';

const isValidFormat = (menuAndQuantity) => {
  if (!INPUT_REGEX.test(menuAndQuantity)) {
    throw new Error('[ERROR]: 주문 형식이 잘못되었습니다.');
  }
}

const isValidMenuQuantity = (quantity) => {
  if (quantity < 0 || quantity > 10) {
    throw new Error('[ERROR]: 메뉴 개수는 최소 0개 ~ 최대 10개 사이여야 합니다.');
  }
}

// const is

const validator = (menusAndQuantities) => {
  menusAndQuantities.forEach((menuAndQuantity) => {
    isValidFormat(menuAndQuantity);

    const { menu, quantity } = menuAndQuantity.match(INPUT_REGEX).groups;
    
  });

}

export default validator;
