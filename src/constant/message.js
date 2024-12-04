export const MESSAGE = {
  inputMenu: "주문하실 메뉴와 수량을 입력해주세요. ex) 피자(2개), 감자튀김(1개), 콜라(3개)\n",
  printOrder: "\n[주문 내역]\n",
  printGift: "\n[서비스]\n",
  printTotalAmount: "\n[최종 결제 금액]\n",
};

export const ERROR_MESSAGE = {
  invalidMenuInput: "[ERROR]: 주문 형식이 잘못되었습니다.",
  overMinimumOrderAmount: "[ERROR]: 최소 주문 금액을 만족하지 못했습니다.",
  menuCountNotInRange: "[ERROR]: 메뉴 개수는 최대 10개까지 입력 가능합니다.",
  notOnlyBeverage: "[ERROR]: 음료만 주문할 수 없습니다.",
  invalidMenuCount: "[ERROR]: 개수를 정확하게 입력해주세요.",
};
