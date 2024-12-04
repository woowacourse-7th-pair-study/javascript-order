import { ALL_MENU } from '../constant/menu.js';

export const parseStringToArray = (input) =>
  input.split(',').map((item) => item.trim());

export const parseStringToOrder = (inputArray) =>
  inputArray.map((input) => {
    const [menu, quantityStr] = input.split('(');

    const quantity = quantityStr.replace('개)', '');

    return { menu, quantity: Number(quantity) };
  });

export const getAllMenuName = () => {
  let allMenu = [];
  Object.values(ALL_MENU).forEach((menus) => {
    allMenu = allMenu.concat(menus.map((menu) => menu.name));
  });

  return allMenu;
};

export const getInitialCategoryCount = () =>
  Object.fromEntries(Object.keys(ALL_MENU).map((key) => [key, 0]));

export const getAllMenu = () => {
  let allMenu = [];
  Object.values(ALL_MENU).forEach((menus) => {
    allMenu = allMenu.concat(menus);
  });

  return allMenu;
};
