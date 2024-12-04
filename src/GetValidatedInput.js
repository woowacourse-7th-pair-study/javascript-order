import { ERROR_MESSAGE } from "./constant/message";
import InputView from "./InputView";

class GetValidatedInput {
  async menu() {
    try {
      const input = await InputView.readMenuAsync();
      const parsedInput = input.split(",");
      this.#validateMenuInput(parsedInput);
      //validation
      return input;
    } catch (error) {
      //print
    }
  }

  #validateMenuInput(input) {
    if (input.length > 10) throw new Error(ERROR_MESSAGE.menuCountNotInRange);
  }
}
