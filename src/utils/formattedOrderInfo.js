import { INPUT_REGEX } from '../constants/constants.js';

const formattedOrderInfo = (menusAndQuantities) => {
  return menusAndQuantities.map((menuAndQuantity) => {
    const { menu: parsedMenu, quantity: parsedQuantity } =
      menuAndQuantity.match(INPUT_REGEX).groups;
    const menu = parsedMenu.trim();
    const quantity = Number(parsedQuantity);

    return { menu, quantity };
  });
}

export default formattedOrderInfo;
