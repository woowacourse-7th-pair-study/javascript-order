import { MENU_INFO } from '../constants/constants.js';

const getMenuByName = (menu) => {
  return MENU_INFO.find((menuInfo) => menuInfo.menu === menu);
};

export default getMenuByName;
