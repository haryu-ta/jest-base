test("呼出回数テスト",() => {
    const mockFunc = jest.fn((flg: number,flg2:number) => {
        return flg + flg2;
    });
    expect(mockFunc(1,2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledWith(1,2);
    mockFunc(4,5);
    expect(mockFunc).toHaveBeenCalledTimes(2);
    mockFunc(100,1);
    expect(mockFunc).toHaveBeenNthCalledWith(3,100,1);
})