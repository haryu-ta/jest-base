import { divide,ZeroDivisorError } from "./divide";


test("4を2でわる",() => {
    expect(divide(4,2)).toEqual(2);
})

test("0で割る",() => {
    expect(() => divide(4,0)).toThrow();
    expect(() => divide(4,0)).toThrow("0で割るのは禁止");
    expect(() => divide(4,0)).toThrow(ZeroDivisorError);
})