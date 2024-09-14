import { Calculator } from "./spy";

test("Spy（挙動変更なし）",() => {
    const calc = new Calculator();
    const sumSpy = jest.spyOn(calc,"sum");
    expect(calc.sum(1,2)).toBe(3);
    expect(calc.sum(3,5)).toBe(8);
    expect(sumSpy).toHaveBeenCalledTimes(2);
    expect(sumSpy).toHaveBeenCalledWith(3,5);
    expect(sumSpy).toHaveBeenNthCalledWith(2,3,5);
    expect(sumSpy).toHaveReturnedWith(3);
    expect(sumSpy).toHaveNthReturnedWith(2,8)
})
test("Spy（挙動変更あり）",() => {
    const calc = new Calculator();
    const sumSpy = jest.spyOn(calc,"sum");
    sumSpy.mockImplementation((a:number ,b:number) => a-b);
    expect(calc.sum(5,2)).toBe(3);
    expect(sumSpy).toHaveBeenCalledTimes(1);
})
test("Spy（挙動変更なし）",() => {
    const calc = new Calculator();
    expect(calc.sum(1,2)).toBe(3);
})

