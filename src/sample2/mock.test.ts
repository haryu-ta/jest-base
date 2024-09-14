test("初めてのmock",() => {
    const mockFunc = jest.fn(() => { return "Hello mock"});
    expect(mockFunc()).toBe("Hello mock");
})

interface returnType {
    name: string,
    address : string,
    gender: string,
    age: number
}

test("非同期モックのの戻り値",async() => {
    const mockFunc = jest.fn();
    mockFunc.mockResolvedValue({name:"itamura",address:"chiba",gender:"men",age:21});
    expect(await mockFunc()).toEqual({name:"itamura",address:"chiba",gender:"men",age:21});
})
test("モックのの戻り値",() => {
    const mockFunc = jest.fn();
    mockFunc.mockReturnValue({name:"itamura",address:"chiba",gender:"men",age:21});
    expect(mockFunc()).toEqual({name:"itamura",address:"chiba",gender:"men",age:21});
})
test("モックのの戻り値",async() => {
    const mockFunc = jest.fn(() => {
        throw Error("エラーです");
    });
    expect(() => mockFunc()).toThrow();
    expect(() => mockFunc()).toThrow("エラーです");
    
})