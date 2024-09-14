// beforeEach: 各テストの前に実行される
// afterEach: 各テストの後に実行される
// beforeAll: グループ内のすべてのテスト。もしくは、ファイル内のすべてのテストの前に一度だけ実行される
// beforeAll: グループ内のすべてのテスト。もしくは、ファイル内のすべてのテストの後に一度だけ実行される
  

describe("outer describe block",() => {
    beforeAll(() => {
        console.log("outer beforeAll");
    });
    afterAll(() => {
        console.log("outer afterAll");
    });
    beforeEach(() => {
        console.log("outer beforeEach");
    });
    afterEach(() => {
        console.log("outer afterEach");
    });
    test("outer test 1", () => {
        console.log("outer test 1");
    })
    test("outer test 2", () => {
        console.log("outer test 2");
    })

    describe("inner describe block",() => {
        beforeAll(() => {
            console.log("inner beforeAll");
        });
        afterAll(() => {
            console.log("inner afterAll");
        });
        beforeEach(() => {
            console.log("inner beforeEach");
        });
        afterEach(() => {
            console.log("inner afterEach");
        });
        test("inner test 1", () => {
            console.log("inner test 1");
        })
        test("inner test 2", () => {
            console.log("inner test 2");
        })
    
    })
})