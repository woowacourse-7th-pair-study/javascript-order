import Delivery from "../src/Delivery";

describe("Delivery 객체 테스트", () => {
  test("delivery 객체 생성할때 유효성 검사", () => {
    expect(
      () =>
        new Delivery([
          { name: "피자", count: 100 },
          { name: "콜라", count: 100 },
        ])
    ).not.toThrow();
    expect(() => new Delivery([{ name: "피자", count: 1 }])).toThrow();
  });
});
