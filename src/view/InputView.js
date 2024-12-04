import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/message.js";

class InputView {
  static readMenuAsync() {
    return Console.readLineAsync(MESSAGE.inputMenu);
  }
}

export default InputView;
