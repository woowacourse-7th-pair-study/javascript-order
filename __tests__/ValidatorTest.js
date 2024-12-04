import validator, { isOverMinimumOrderPrice } from '../src/utils/validator.js';

describe('Validator Test', () => {
  test.each([
    ['주문 형식이 맞는지 확인 (정규 표현식)', '(피자 2개)', '[ERROR]: 주문 형식이 잘못되었습니다.'],
    ['주문 수량이 숫자인지 확인', '피자(두개)', '[ERROR]: 주문 형식이 잘못되었습니다.'],
    [
      '메뉴가 각각 최소 0개 ~ 최대 10개 사이인지 확인',
      '피자(100개)',
      '[ERROR]: 메뉴 개수는 최소 0개 ~ 최대 10개 사이여야 합니다.',
    ],
    [
      '메뉴 이름이 주문 가능한 메뉴인지 확인',
      '없는메뉴(2개)',
      '[ERROR]: 주문할 수 없는 메뉴 입니다.',
    ],
    ['메뉴 이름이 중복되는지 확인', '피자(2개), 피자(3개)', '[ERROR]: 중복된 메뉴가 있습니다.'],
    [
      '메뉴에 `음료`만 있는지 확인',
      '콜라(1개), 오렌지 주스(1개)',
      '[ERROR]: 음료만으로는 주문할 수 없습니다.',
    ],
  ])('%s', (_, input, errorMessage) => {
    const menusAndQuantities = input.split(',').map((element) => element.trim());

    expect(() => validator(menusAndQuantities)).toThrow(errorMessage);
  });

  test.each([
    '피자(2개), 감자튀김(1개), 콜라(3개)',
    '감자튀김(9개), 샐러드(8개), 콜라(8개), 오렌지 주스(9개)',
  ])('올바른 입력값이 주어지면 에러가 발생하지 않는다. - %s', (input) => {
    const menusAndQuantities = input.split(',').map((element) => element.trim());

    expect(() => validator(menusAndQuantities)).not.toThrow();
  });
});

describe('isOverMinimumOrderPrice 메소드 테스트', () => {
  test('최소 주문 금액을 만족하지 못하면 에러를 발생한다.', () => {
    const totalPrice = 29_000;
    expect(() => isOverMinimumOrderPrice(totalPrice)).toThrow(
      '[ERROR]: 최소 주문 금액을 만족하지 못했습니다.',
    );
  });

  test('최소 주문 금액을 만족하면 에러가 발생하지 않는다.', () => {
    const totalPrice = 31_000;
    expect(() => isOverMinimumOrderPrice(totalPrice)).not.toThrow();
  });
});
