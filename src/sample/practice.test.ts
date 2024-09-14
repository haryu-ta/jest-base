import { ShoppingList } from "./practice";

describe("addaddItemメソッドのテスト", () => {
  let cls: ShoppingList;
  beforeAll(() => {
    cls = new ShoppingList();
  });

  test("初期状態", () => {
    //const cls = new ShoppingList();
    expect(cls.list).toEqual([]);
  });

  test("1回目の追加", () => {
    //const cls = new ShoppingList();
    cls.addItem("abc");
    expect(cls.list).toEqual(["abc"]);
  });
  test("2回目の追加", () => {
    //const cls = new ShoppingList();
    cls.addItem("cde");
    expect(cls.list).toEqual(["abc", "cde"]);
  });
});

describe("removeItemメソッドのテスト", () => {
  let cls: ShoppingList;
  beforeEach(() => {
    cls = new ShoppingList();
    cls.addItem("abc");
    cls.addItem("efg");
    cls.addItem("hij");
  });
  test("後削除", () => {
    cls.removeItem("hij");
    expect(cls.list).toEqual(["abc", "efg"]);
  });
  test("中間削除", () => {
    cls.removeItem("efg");
    expect(cls.list).toEqual(["abc", "hij"]);
  });
  test("前削除", () => {
    cls.removeItem("abc");
    expect(cls.list).toEqual(["efg", "hij"]);
  });
  test("全削除", () => {
    cls.removeItem("abc");
    cls.removeItem("efg");
    cls.removeItem("hij");
    expect(cls.list).toEqual([]);
  });
  test("存在しない項目を削除", () => {
    expect(() => {
      cls.removeItem("xyz");
    }).toThrow();
    expect(() => {
      cls.removeItem("xyz");
    }).toThrow("アイテム: xyz は存在しません");
  });
});
