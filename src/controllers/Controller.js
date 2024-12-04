import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const orderInfo = await InputView.readMenuAndQuantity();
    orderInfo.forEach(({ menu, quantity }) => {
      
    });
    // OutputView.printOrderList(orderList, totalPrice, deliveryFee, serviceQuantity);
  }
}

export default Controller;
