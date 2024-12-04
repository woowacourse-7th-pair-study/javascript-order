import { MENU_INFO } from '../constants/constants.js';
import { isOverMinimumOrderPrice } from '../utils/validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import getMenuByName from '../utils/getMenuByName.js';

class Controller {
  async start() {
    const orderInfo = await InputView.readMenuAndQuantity();

    const orderList = this.#getOrderList(orderInfo);
    const totalPrice = this.#getTotalPrice(orderList);

    isOverMinimumOrderPrice(totalPrice);

    const deliveryFee = this.#getDeliveryFee(totalPrice);
    const serviceQuantity = this.#getServiceQuantity(orderList);

    OutputView.printOrderList(orderList, totalPrice, deliveryFee, serviceQuantity);
  }

  #getOrderList(orderInfo) {
    return orderInfo.map((order) => ({
      ...order,
      price: getMenuByName(order.menu).price * order.quantity,
    }));
  }

  #getTotalPrice(orderLIst) {
    return orderLIst.reduce((totalPrice, order) => (totalPrice += order.price), 0);
  }

  #getDeliveryFee(totalPrice) {
    if (50_000 > totalPrice) return 2_000;
    if (totalPrice >= 50_000 && totalPrice < 100_000) return 1_000;

    return 0;
  }

  #getServiceQuantity(orderList) {
    return orderList.reduce((serviceQuantity, order) => {
      const { menu, quantity } = order;

      const type = getMenuByName(menu).type;

      if (type === '메인') serviceQuantity += quantity * 1;

      return serviceQuantity;
    }, 0);
  }
}

export default Controller;
