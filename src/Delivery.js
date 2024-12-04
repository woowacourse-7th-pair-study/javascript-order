import { ERROR_MESSAGE } from "./constant/message";
import Menu from "./Menu";
export default class Delivery {
  #orderReceipts;
  #totalAmount;
  #menu;
  constructor(orderReceipts) {
    this.#orderReceipts = orderReceipts;
    this.#totalAmount = 0;
    this.#menu = new Menu();
    this.#calculateTotalAmount();
    this.#validateMinimumAmount();
  }
  #calculateTotalAmount() {
    this.#orderReceipts.forEach(({ name, count }) => {
      this.#totalAmount += this.#menu.getPriceByName(name) * count;
    });
  }
  #validateMinimumAmount() {
    if (this.#totalAmount < 30000) {
      throw new Error(ERROR_MESSAGE.overMinimumOrderAmount);
    }
  }
}
