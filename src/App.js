import { parseStringToArray, parseStringToOrder } from './util/parser.js';
import { validateInputForm } from './util/validator.js';
import InputView from './View/InputView.js';

class App {
  async start() {
    const orders = await this.#getMenuAndQuantityInput();
    console.log(orders);
  }

  async #getMenuAndQuantityInput() {
    const input = await InputView.readMenuAndQuantity();

    const inputArray = parseStringToArray(input);
    validateInputForm(inputArray);
    // validate
    const orders = parseStringToOrder(inputArray);
    return orders;
  }
}

export default App;
