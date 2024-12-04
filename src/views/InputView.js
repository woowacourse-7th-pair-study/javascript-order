import { Console } from '@woowacourse/mission-utils';
import validator from '../utils/validator.js';
import { INPUT_REGEX } from '../constants/constants.js';

const InputView = {
  async readMenuAndQuantity() {
    try {
      const userInput = await Console.readLineAsync(
        '주문하실 메뉴와 수량을 입력해주세요. ex) 피자(2개), 감자튀김(1개), 콜라(3개)\n',
      );

      const menusAndQuantities = userInput.split(',').map((element) => element.trim());

      validator(menusAndQuantities);

      const orderInfo = menusAndQuantities.map((menuAndQuantity) => {
        const { menu: parsedMenu, quantity: parsedQuantity } =
          menuAndQuantity.match(INPUT_REGEX).groups;
        const menu = parsedMenu.trim();
        const quantity = Number(parsedQuantity);

        return { menu, quantity };
      });

      return orderInfo;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default InputView;
