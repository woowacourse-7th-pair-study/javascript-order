import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const menusAndQuantities = await InputView.readMenuAndQuantity();
  }
}

export default Controller;
