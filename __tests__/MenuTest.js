import Menu from "../src/Menu";
describe("menu 객체 테스트", () => {
  const menu = new Menu();
  test("menuName을 가지고 있는지 확인하는 함수 테스트", () => {
    expect(menu.has("피자")).toBe(true);
    expect(menu.has("스시")).toBe(false);
  });

  test("음료인지 확인하는 함수 테스트", () => {
    expect(menu.isBeverage("피자")).toBe(false);
    expect(menu.isBeverage("콜라")).toBe(true);
  });
});
