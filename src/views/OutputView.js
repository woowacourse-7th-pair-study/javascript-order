import { Console } from '@woowacourse/mission-utils';
import formattedPrice from '../utils/formattedPrice.js';

const OutputView = {
  /**
   * 
   * @param {Array<{menu: string, quantity: number, price: number}>} orderList 
   * @param {number} totalPrice
   * @param {number} deliveryFee
   * @param {number} serviceQuantity
   */
  printOrderList(orderList, totalPrice, deliveryFee, serviceQuantity = 0) {
    Console.print('[주문 내역]');
    orderList.forEach((order) => {
      Console.print(`${order.menu}(${order.quantity}개): ${formattedPrice(order.price)}원`);
    });

    Console.print(`총 주문 금액: ${formattedPrice(totalPrice)}원`);
    Console.print(`배달비: ${formattedPrice(deliveryFee)}원`);
    if (serviceQuantity !== 0) Console.print(`[서비스]\n서비스 만두(${serviceQuantity}개)`);
    Console.print(`[최종 결제 금액]\n${formattedPrice(totalPrice + deliveryFee)}원`);
  },
}

export default OutputView;
