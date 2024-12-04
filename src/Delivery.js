import { ERROR_MESSAGE } from "./constant/message.js";
import Menu from "./Menu.js";

export default class Delivery {
  #orderReceipts;
  #totalAmount;
  #menu;
  #deliveryFee;
  #giftCount;

  constructor(orderReceipts) {
    this.#orderReceipts = orderReceipts;
    this.#totalAmount = 0;
    this.#menu = new Menu();

    this.#calculateTotalAmount();
    this.#validateMinimumAmount();
    this.#deliveryFee = this.#getDeliveryFee();
    this.#giveGiftDumpling();
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

  #getDeliveryFee() {
    if (this.#totalAmount < 50000) return 2000;
    if (this.#totalAmount >= 50000 && this.#totalAmount < 100000) return 1000;
    return 0;
  }

  #giveGiftDumpling() {
    this.#orderReceipts.forEach(({ name }) => {
      if (this.#menu.isMain(name)) {
        this.#giftCount += 1;
      }
    });
  }

  getResultInfoForPrint() {
    const orderReceiptsString = this.#getOrderReceiptsForPrint();
    const giftCount = this.#giftCount;
    const totalPayment = this.#totalAmount + this.#deliveryFee;

    return { orderReceiptsString, giftCount, totalPayment };
  }

  #getOrderReceiptsForPrint() {
    const orderContentString = this.#orderReceipts
      .map(({ name, count }) => {
        const orderPrice = this.#menu.getPriceByName(name) * count;
        return `${name}(${count}개): ${orderPrice.toLocaleString()}원`;
      })
      .join("\n");
    const totalAmountString = `\n총 주문 금액: ${this.#totalAmount.toLocaleString()}원`;
    const deliveryFeeString = `\n배달비: ${this.#deliveryFee.toLocaleString()}원`;

    return orderContentString + totalAmountString + deliveryFeeString;
  }
}
