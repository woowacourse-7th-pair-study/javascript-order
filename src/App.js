import Menu from "./Menu.js";
import GetValidatedInput from "./GetValidatedInput.js";
import Delivery from "./Delivery.js";
import OutputView from "./view/OutputView.js";

class App {
  #menu;
  #getValidatedInput;

  constructor() {
    this.#menu = new Menu();
    this.#getValidatedInput = new GetValidatedInput();
  }

  async run() {
    const orderReceipts = await this.#getValidatedInput.menu(this.#menu);
    const delivery = new Delivery(orderReceipts);

    const { orderReceiptsString, giftCount, totalPayment } = delivery.getResultInfoForPrint();
    OutputView.printResult({ orderReceiptsString, giftCount, totalPayment });
  }
}

export default App;
