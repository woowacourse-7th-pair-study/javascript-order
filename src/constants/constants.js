export const INPUT_REGEX = /^(?<menu>[ㄱ-ㅎ가-힣\s]+)\((?<quantity>[0-9]+)개\)$/;

export const MENU_INFO = Object.freeze([
  { type: '메인', menu: '피자', price: 25_000 },
  { type: '메인', menu: '햄버거', price: 10_000 },
  { type: '메인', menu: '치킨', price: 23_000 },
  { type: '사이드', menu: '감자튀김', price: 5_000 },
  { type: '사이드', menu: '치즈스틱', price: 7_000 },
  { type: '사이드', menu: '샐러드', price: 8_000 },
  { type: '음료', menu: '콜라', price: 2_000 },
  { type: '음료', menu: '제로 콜라', price: 2_500 },
  { type: '음료', menu: '오렌지 주스', price: 3_000 },
]);
