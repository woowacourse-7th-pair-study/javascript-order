import { ERROR_MESSAGE } from "./constant/message";
import InputView from "./InputView";
import { MENU } from "./constant/menu";
export default class GetValidatedInput {
  async menu(menu) {
    try {
      const input = await InputView.readMenuAsync();
      const parsedInput = input.split(",");
      this.#validateMenuInput(parsedInput, menu);

      return parsedInput;
    } catch (error) {
      //print
    }
  }

  #validateMenuInput(input, menu) {
    if (input.length > 10) throw new Error(ERROR_MESSAGE.menuCountNotInRange);
    input.forEach((menuName) => {
      if (!menu.has(menuName)) throw new Error(ERROR_MESSAGE.invalidMenuInput);
    });
  }
}
