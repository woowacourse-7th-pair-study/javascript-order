import POSMachine from './POSMachine.js';
import { parseStringToArray, parseStringToOrder } from './util/parser.js';
import { validateInputForm, validateOrders } from './util/validator.js';
import InputView from './View/InputView.js';

class App {
  async start() {
    const orders = await this.#getMenuAndQuantityInput();
    const machine = new POSMachine();
    machine.processOrder(orders);
  }

  async #getMenuAndQuantityInput() {
    const input = await InputView.readMenuAndQuantity();

    const inputArray = parseStringToArray(input);
    validateInputForm(inputArray);

    const orders = parseStringToOrder(inputArray);
    validateOrders(orders);

    return orders;
  }
}

export default App;
