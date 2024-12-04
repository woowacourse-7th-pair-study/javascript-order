import Menu from "./Menu.js";
import GetValidatedInput from "./GetValidatedInput.js";

class App {
  #menu;
  #getValidatedInput;
  constructor() {
    this.#menu = new Menu();
    this.#getValidatedInput = new GetValidatedInput();
  }
  async start() {
    const inputMenu = this.#getValidatedInput.menu(this.#menu);
  }
}

export default App;
