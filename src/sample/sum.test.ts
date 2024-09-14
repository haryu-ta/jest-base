import { sum } from "./sum";

describe("sum関数のテスト", () => {
  // test("正の整数同士の足し算",() => {
  //     expect(sum(1,2)).toBe(3);
  // })
  // test("正と負の足し算", () => {
  //     expect(sum(-3,2)).toBe(-1);
  // })
});

test.each`
  a     | b     | expected
  ${1}  | ${2}  | ${3}
  ${1}  | ${-2} | ${-1}
  ${10} | ${5}  | ${15}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});

test.each([
  { a: 1, b: 2, expected: 3 },
  { a: 1, b: -2, expected: -1 },
  { a: 10, b: 5, expected: 15 },
])("${a}+${b}=${expected}", ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});
