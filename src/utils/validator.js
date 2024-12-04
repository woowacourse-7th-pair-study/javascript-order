import { INPUT_REGEX, MENU_INFO } from '../constants/constants.js';

const isValidFormat = (menuAndQuantity) => {
  if (!INPUT_REGEX.test(menuAndQuantity)) {
    throw new Error('[ERROR]: 주문 형식이 잘못되었습니다.');
  }
};

const isValidMenuQuantity = (quantity) => {
  if (quantity < 0 || quantity > 10) {
    throw new Error('[ERROR]: 메뉴 개수는 최소 0개 ~ 최대 10개 사이여야 합니다.');
  }
};

const isValidMenuName = (menu) => {
  const menuArr = MENU_INFO.map((menuInfo) => menuInfo.menu);

  if (!menuArr.includes(menu)) {
    throw new Error('[ERROR]: 주문할 수 없는 메뉴 입니다.');
  }
};

const isDuplicatedMenu = (menusAndQuantities) => {
  const orderedMenuArr = menusAndQuantities.map(
    (menuAndQuantity) => menuAndQuantity.match(INPUT_REGEX).groups.menu,
  );

  if (new Set(orderedMenuArr).size != orderedMenuArr.length) {
    throw new Error('[ERROR]: 중복된 메뉴가 있습니다.');
  }
};

const isOnlyDrink = (menusAndQuantities) => {
  const isNotDrink = menusAndQuantities.every((menuAndQuantity) => {
    const { menu } = menuAndQuantity.match(INPUT_REGEX).groups;

    const type = MENU_INFO.find((value) => value.menu === menu).type;

    return type === '음료';
  });

  if (isNotDrink) {
    throw new Error('[ERROR]: 음료만으로는 주문할 수 없습니다.');
  }
};

export const isOverMinimumOrderPrice = (totalPrice) => {
  if (totalPrice < 30_000) {
    throw new Error('[ERROR]: 최소 주문 금액을 만족하지 못했습니다.');
  }
};

const validator = (menusAndQuantities) => {
  menusAndQuantities.forEach((menuAndQuantity) => {
    isValidFormat(menuAndQuantity);

    const { menu: parsedMenu, quantity } = menuAndQuantity.match(INPUT_REGEX).groups;
    const menu = parsedMenu.trim();

    isValidMenuQuantity(quantity);
    isValidMenuName(menu);
  });

  isDuplicatedMenu(menusAndQuantities);
  isOnlyDrink(menusAndQuantities);
};

export default validator;
