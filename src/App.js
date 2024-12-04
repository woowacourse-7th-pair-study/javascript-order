import { parseStringToArray } from './util/parser.js';
import { validateInputForm } from './util/validator.js';
import InputView from './View/InputView.js';

class App {
  async start() {
    const menuAndQuantity = await this.#getMenuAndQuantityInput();
    console.log(menuAndQuantity);
  }

  async #getMenuAndQuantityInput() {
    const input = await InputView.readMenuAndQuantity();

    const inputArray = parseStringToArray(input);
    validateInputForm(inputArray);
    // validate
    return inputArray;
  }
}

export default App;
