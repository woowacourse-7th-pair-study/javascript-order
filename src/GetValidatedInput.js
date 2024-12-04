import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./constant/message.js";
import InputView from "./InputView.js";

export default class GetValidatedInput {
  async menu(menu) {
    try {
      const input = await InputView.readMenuAsync();
      const parsedInput = input.split(",").map((menuString) => {
        // const regexp = \\
        const [menuName, menuCountString] = menuString.split("(");
        const menuCount = Number(menuCountString.replace("개)", ""));

        return { name: menuName, count: menuCount };
      }); // ["피자(2개)", "감자튀김(1개)"]
      this.#validateMenuInput(parsedInput, menu);

      return parsedInput;
    } catch (error) {
      Console.print(error.message);
    }
  }

  #validateMenuInput(input, menu) {
    if (input.length > 10) throw new Error(ERROR_MESSAGE.menuCountNotInRange);
    input.forEach(({ name, count }) => {
      if (!menu.has(name)) throw new Error(ERROR_MESSAGE.invalidMenuInput);
      if (Number.isNaN(count)) throw new Error(ERROR_MESSAGE.invalidMenuCount);
      if (!Number.isInteger(count)) throw new Error(ERROR_MESSAGE.invalidMenuCount);
    });
    if (input.every(({ name }) => menu.isBeverage(name)))
      throw new Error(ERROR_MESSAGE.notOnlyBeverage);
  }
}
