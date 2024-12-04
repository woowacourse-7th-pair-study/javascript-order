import Menu from "./Menu.js";
import GetValidatedInput from "./GetValidatedInput.js";
import Delivery from "./Delivery.js";
import OutputView from "./view/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  #menu;
  #getValidatedInput;

  constructor() {
    this.#menu = new Menu();
    this.#getValidatedInput = new GetValidatedInput();
  }

  async run() {
    try {
      const orderReceipts = await this.#getValidatedInput.menu(this.#menu);
      const delivery = new Delivery(orderReceipts);

      const { orderReceiptsString, giftCount, totalPayment } =
        delivery.getResultInfoForPrint();
      OutputView.printResult({ orderReceiptsString, giftCount, totalPayment });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default App;
