import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readMenuAndQuantity() {
    const input = await Console.readLineAsync(
      '주문하실 메뉴와 수량을 입력해주세요. ex) 피자(2개), 감자튀김(1개), 콜라(3개)\n',
    );

    return input;
  },
};

export default InputView;
