import { delay } from "./async";

test("非同期", async () => {
  try {
    const message = await delay("Hello", -1);
  } catch (e: any) {
    expect(e.message).toBe("timeは正の整数を指定してください");
  }
});
test("非同期2", async () => {
  const message = await delay("Hello", 10);
  expect(message).toEqual("Hello");
});
