import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/message";

class InputView {
  static readMenuAsync() {
    return Console.readLineAsync(MESSAGE.inputMenu);
  }
}

export default InputView;
