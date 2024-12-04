import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/message.js";

export default class OutputView {
  static printResult({ orderReceiptsString, giftCount, totalPayment }) {
    Console.print(MESSAGE.printOrder);
    Console.print(orderReceiptsString);
    if (giftCount > 0) {
      Console.print(MESSAGE.printGift);
      Console.print(`서비스 만두(${giftCount}개)`);
    }
    Console.print(MESSAGE.printTotalAmount);
    Console.print(`${totalPayment.toLocaleString()}원`);
  }
}
