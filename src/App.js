import InputView from "./InputView";

class App {
  async start() {
    const inputMenu = await InputView.readMenuAsync();
  }
}

export default App;
