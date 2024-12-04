import { getInitialCategoryCount } from './util/parser.js';

class POSMachine {
  #totalPrice;
  #categoryCount;

  constructor() {
    this.#totalPrice = 0;
    this.#categoryCount = getInitialCategoryCount();
  }
}
export default POSMachine;
