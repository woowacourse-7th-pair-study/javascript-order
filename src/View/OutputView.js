import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printReceipt(orderResult) {
    const { orders, serviceCount, deliveryPrice, totalPrice } = orderResult;
    Console.print('[주문 내역]');
    orders.forEach((order) => {
      Console.print(
        `${order.menu}(${
          order.quantity
        }개): ${order.totalPrice.toLocaleString()}원`,
      );
    });

    Console.print(`총 주문 금액: ${totalPrice.toLocaleString()}원`);
    Console.print(`배달비: ${deliveryPrice.toLocaleString()}원`);
    if (serviceCount) {
      Console.print('\n[서비스]');
      Console.print(`서비스 만두(${serviceCount}개)`);
    }

    Console.print('\n[최종 결제 금액]');
    Console.print(`${(totalPrice + deliveryPrice).toLocaleString()}원`);
  },
};

export default OutputView;
