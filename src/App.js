import { Console } from '@woowacourse/mission-utils';
import POSMachine from './POSMachine.js';
import { parseStringToArray, parseStringToOrder } from './util/parser.js';
import { validateInputForm, validateOrders } from './util/validator.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    try {
      const orders = await this.#getMenuAndQuantityInput();
      const machine = new POSMachine();
      const orderResult = machine.processOrder(orders);
      OutputView.printReceipt(orderResult);
    } catch (e) {
      Console.print(e.message);
    }
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
