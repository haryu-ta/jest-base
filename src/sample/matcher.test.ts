type objModel = {
    name: string,
    isMan : boolean
}

describe("toBe系のMatcher",() => {
    test("数値",() => {
        expect(2+2).toBe(4);
    })

    test("文字列",() => {
        expect("jest").toBe("jest");
    })

    test("Boolean",() => {
        expect(1===1).toBe(true);
    })
})

describe("toEqual系",() => {
    test("配列のテスト",() =>{
        const array1 : string[] = ["ab","ce","ef"];
        const array2 : string[] = ["ab","ce","ef"];
        expect(array1).toEqual(array2);
    })
    test("オブジェクトのテスト",() =>{
        const obj1 : objModel = {
            name: "板村",
            isMan: true
        }
        const obj2 : objModel = {
            name: "板村",
            isMan: true
        }

        expect(obj1).toEqual(obj2);
    })
})