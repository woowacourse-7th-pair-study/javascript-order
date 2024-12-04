import { getAllMenuName } from './parser.js';

export const validateInputForm = (inputArray) => {
  inputArray.forEach((input) => {
    const [, second] = input.split('(');
    if (!second) {
      throw new Error('[ERROR]');
    }
    const secondArray = second.split('');
    // first가 메뉴에 있는지

    if (secondArray.pop() !== ')') {
      throw new Error('[ERROR]');
    }

    if (secondArray.pop() !== '개') {
      throw new Error('[ERROR]');
    }

    if (Number.isNaN(Number(secondArray.join('')))) {
      throw new Error('[ERROR]');
    }
  });
};

export const validateOrders = (orders) => {
  const allMenu = getAllMenuName();
  let totalQuantity = 0;

  orders.forEach((order) => {
    if (!allMenu.includes(order.menu)) {
      throw new Error('[ERROR] 존재하지 않는 메뉴입니다.');
    }

    if (Number.isNaN(order.quantity)) {
      throw new Error('[ERROR] 수량을 숫자로 입력해주세요.');
    }

    if (!Number.isInteger(order.quantity)) {
      throw new Error('[ERROR] 수량을 정수로 입력해주세요.');
    }

    if (order.quantity < 1) {
      throw new Error('[ERROR] 수량을 0개 이상 입력해주세요.');
    }

    totalQuantity += order.quantity;
  });

  if (totalQuantity < 1 || totalQuantity > 10) {
    throw new Error('[ERROR] 총 수량은 1개 이상, 10개 이하로 주문해야 합니다.');
  }
};

export const validateTotalPrice = (totalPrice) => {
  if (totalPrice < 30_000) {
    throw new Error('[ERROR] 최소 주문 금액은 30,000원 입니다.');
  }
};

export const validateCategoryCount = (categoryCount) => {
  if (categoryCount.main === 0 && categoryCount.side === 0) {
    throw new Error('[ERROR] 음료만 주문하면 안됩니다. 양심 챙기세요.');
  }
};
