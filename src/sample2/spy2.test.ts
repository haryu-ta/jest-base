import { func1,func2 } from "./spy2";

jest.mock("./spy2")
const mock = jest.mocked(func1);
const mock2 = jest.mocked(func2);
mock.mockImplementation(() => "Hello3");
// mock2.mockImplementation(() => "Hello4");


test("gogo" , () => {
    expect(func1()).toBe("Hello3");
})

import * as funcCollect from "./spy2";

describe("Class以外でspyOn",() => {
    test("func1",() => {
        const func1 = jest.spyOn(funcCollect,"func1");
        func1.mockImplementation(() => "Japan")
        expect(funcCollect.func1()).toBe("Japan");
    })
    test("func2",() =>{
        const func2 = jest.spyOn(funcCollect,"func2");
        expect(funcCollect.func2()).toBe("Hello2");
    })
})