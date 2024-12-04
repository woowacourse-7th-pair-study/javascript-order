import { getAllMenu, getInitialCategoryCount } from './util/parser.js';
import { ALL_MENU } from './constant/menu.js';
import { validateCategoryCount, validateTotalPrice } from './util/validator.js';

class POSMachine {
  #totalPrice;
  #categoryCount;
  #orders;

  constructor() {
    this.#totalPrice = 0;
    this.#categoryCount = getInitialCategoryCount();
  }

  processOrder(orders) {
    this.#orders = orders;
    this.#updateCategoryCount();
    this.#updateTotalPrice();

    validateCategoryCount(this.#categoryCount);
    validateTotalPrice(this.#totalPrice);

    const deliveryPrice = this.#getDeliveryPrice();
    const serviceCount = this.#getServiceCount();

    return {
      orders: this.#orders,
      serviceCount,
      deliveryPrice,
      totalPrice: this.#totalPrice,
    };
  }

  #updateCategoryCount() {
    this.#orders.forEach((order) => {
      const category = this.#getCategory(order.menu);
      this.#categoryCount[category] += order.quantity;
    });
  }

  #getCategory(orderedMenu) {
    const categories = Object.keys(ALL_MENU);
    let menuCategory = '';

    categories.forEach((category) => {
      const menus = ALL_MENU[category].map((menu) => menu.name);
      if (menus.includes(orderedMenu)) {
        menuCategory = category;
      }
    });

    return menuCategory;
  }

  #updateTotalPrice() {
    this.#orders.forEach((order) => {
      const price = this.#getPrice(order.menu) * order.quantity;
      this.#totalPrice += price;
      order.totalPrice = price;
    });
  }

  #getPrice(orderedMenu) {
    const allMenus = getAllMenu();
    const filteredMenu = allMenus.filter((menu) => menu.name === orderedMenu);

    return filteredMenu[0].price;
  }

  #getDeliveryPrice() {
    if (this.#totalPrice < 50_000) {
      return 2_000;
    }

    if (this.#totalPrice < 100_000) {
      return 1_000;
    }

    return 0;
  }

  #getServiceCount() {
    return this.#categoryCount.main;
  }
}
export default POSMachine;
