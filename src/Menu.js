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
}
