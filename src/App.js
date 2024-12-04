import InputView from "./InputView";
import Menu from "./Menu";
import GetValidatedInput from "./GetValidatedInput";

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
