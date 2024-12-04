import { ERROR_MESSAGE } from "./constant/message.js";
import InputView from "./view/InputView.js";

export default class GetValidatedInput {
  async menu(menu) {
    const input = await InputView.readMenuAsync();
    const parsedInput = input.split(",").map((menuString) => {
      const [menuName, menuCountString] = menuString.split("(");
      const menuCount = Number(menuCountString.trim().replace("개)", ""));

      return { name: menuName.trim(), count: menuCount };
    }); // ["피자(2개)", "감자튀김(1개)"]
    this.#validateMenuInput(parsedInput, menu);

    return parsedInput;
  }

  #validateMenuInput(input, menu) {
    if (input.length > 10) throw new Error(ERROR_MESSAGE.menuCountNotInRange);
    input.forEach(({ name, count }) => {
      if (!menu.has(name)) throw new Error(ERROR_MESSAGE.invalidMenuInput);
      if (Number.isNaN(count)) throw new Error(ERROR_MESSAGE.invalidMenuCount);
      if (!Number.isInteger(count))
        throw new Error(ERROR_MESSAGE.invalidMenuCount);
    });
    if (input.every(({ name }) => menu.isBeverage(name)))
      throw new Error(ERROR_MESSAGE.notOnlyBeverage);
  }
}
