import Menu from "../src/Menu";
describe("menu 객체 테스트", () => {
  const menu = new Menu();
  test("menuName을 가지고 있는지 확인하는 함수 테스트", () => {
    expect(menu.has("피자")).toBeTruthy();
    expect(menu.has("스시")).toBeFalsy();
  });
});
