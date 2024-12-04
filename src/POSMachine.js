import { getInitialCategoryCount } from './util/parser.js';
import { ALL_MENU } from './constant/menu.js';

class POSMachine {
  #totalPrice;
  #categoryCount;

  constructor() {
    this.#totalPrice = 0;
    this.#categoryCount = getInitialCategoryCount();
  }

  updateCategoryCount(orders) {
    orders.forEach((order) => {
      const category = this.#getCategory(order.menu);
      this.#categoryCount[category] += order.quantity;
    });
  }

  #getCategory(menu) {
    const categories = Object.keys(ALL_MENU);
    let menuCategory = '';

    categories.forEach((category) => {
      const menus = ALL_MENU[category].map((menu) => menu.name);
      if (menus.includes(menu)) {
        menuCategory = category;
      }
    });

    return menuCategory;
  }

  #getTotalPrice(orders) {
    orders.forEach((order) => {
      const price = this.#getPrice(order.menu) * order.quantity;
      this.#totalPrice += price;
    });
  }

  #getPrice(menu) {}
}
export default POSMachine;
