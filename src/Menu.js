import { MENU } from "./constant/menu.js";
export default class Menu {
  #main;
  #side;
  #beverage;
  constructor() {
    this.#main = MENU.main;
    this.#side = MENU.side;
    this.#beverage = MENU.beverage;
  }

  has(menuName) {
    return (
      this.hasInCategory(this.#main, menuName) ||
      this.hasInCategory(this.#side, menuName) ||
      this.hasInCategory(this.#beverage, menuName)
    );
  }

  hasInCategory(category, menuName) {
    return category.some(({ name }) => {
      return name === menuName;
    });
  }

  isBeverage(menuName) {
    return this.hasInCategory(this.#beverage, menuName);
  }
  getPriceByName(menuName) {
    if (this.hasInCategory(this.#main, menuName)) {
      return this.#getPriceInCategory(this.#main, menuName);
    }
    if (this.hasInCategory(this.#side, menuName)) {
      return this.#getPriceInCategory(this.#side, menuName);
    }
    if (this.hasInCategory(this.#beverage, menuName)) {
      return this.#getPriceInCategory(this.#beverage, menuName);
    }
  }
  #getPriceInCategory(category, menuName) {
    return category.find(({ name }) => name === menuName).price;
  }
}
