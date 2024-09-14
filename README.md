## ProjectStart

```
# nodeセットアップ
npm init
# typescriptセットアップ
tsc --init
# 関連モジュールインストール
npm install --save express body-parser
# ホットリロード用の設定をインストール
npm install --save-dev nodemon

# package.jsonに以下を追加
# "start": "nodemon dist/app.js"
```

## TEST準備

```
npm i  jest @types/jest ts-jest
npx ts-jest config:init

```

## ESM と CSJ
- ESM
  - ES6の仕様
  - ChromeやFirefoxなどのブラウザでは動く。IEは動かない
  - import文を使用
- CSJ
  -  CommonJSの仕様
  -  Nodejs環境で動作する（サーバーサイド側）
  -  require文を使用

## MOCK種類

- jest.fn
  - 新しいモック関数を作成する
- jest.spyOn
  - 特定のオブジェクトのメソッドをモックに置き換えて監視する
  - 監視だけでなく、実装を変更することも可能
  - オブジェクト配下のメソッドでなくても監視可能
    - https://dev.classmethod.jp/articles/jest-spyon-with-export-function/
- jest.mock
  - モジュール全体を置き換える
  - 外部ライブラリの置き換えに利用

## テスト種類

### 非同期処理

```javascript
test("非同期異常系", async () => {
  try {
    const message = await delay("Hello", -1);
  } catch (e: any) {
    expect(e.message).toBe("timeは正の整数を指定してください");
  }
});

test("非同期正常系", async () => {
  const message = await delay("Hello", 10);
  expect(message).toEqual("Hello");
});
```

### パラメータマイズテスト

```javascript
test.each([
  { a: 1, b: 2, expected: 3 },
  { a: 1, b: -2, expected: -1 },
  { a: 10, b: 5, expected: 15 },
])("${a}+${b}=${expected}のテスト", ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});
```

### 異常系テスト

```javascript
test("Exception送出系",() => {
  // ポイント：expect内がアロー関数にする
  expect(() => devide(4,0)).toThrow();
})
```

### 曖昧一致テスト

[参考](https://qiita.com/pirosikick/items/cb9419a1233e8f316b88)

```javascript
test("オブジェクト曖昧一致",() => {
  const res = {
    message: "TODOの作成に成功しました",
    createdTodo: {
      id: "0.981231678642128967",  // 動的な値
      text: "Mizuhara",
    },
  };

  expect(res).toEqual(
    expect.objectContaining({
      message: "TODOの作成に成功しました",
      createdTodo: { 
        id: expect.any(String),
        text: "Mizuhara" 
      },
    })
  );
});
```

## 前処理、後処理

|コマンド|実行タイミング|
|---|---|
|beforeEach|各テストの前に実行される|
|afterEach|各テストの後に実行される|
beforeAll|グループ内のすべてのテスト。もしくは、ファイル内の|すべてのテストの前に一度だけ実行される|
|beforeAll|グループ内のすべてのテスト。もしくは、ファイル内のすべてのテストの後に一度だけ実行される|

## Mock

### jest.Fn()

```javascript
test("Mock",() => {
    const mockFunc = jest.fn((x: number,y:number) => {
      returnx + y;
    });
    expect(mockFunc(1,2)).toBe(3)
    expect(mockFunc).toHaveBeenCalledTimes(1);
})

test("非同期モックのの戻り値",async() => {
    const mockFunc = jest.fn();
    mockFunc.mockResolvedValue({name:"itamura",address:"chiba",gender:"men",age:21});
    expect(await mockFunc()).toEqual({name:"itamura",address:"chiba",gender:"men",age:21});
})

test("同期モックの戻り値",() => {
    const mockFunc = jest.fn();
    mockFunc.mockReturnValue({name:"itamura",address:"chiba",gender:"men",age:21});
    expect(mockFunc()).toEqual({name:"itamura",address:"chiba",gender:"men",age:21});
})
```

### jest.spyOn()

▼ テスト対象クラス
```javascript
export class Calculator {
    sum = (a:number,b:number):number => {
        return a + b;
    }
}
```

```javascript
import { Calculator } from "./spy";

test("Spy_挙動変更なし",() => {
    const calc = new Calculator();
    const sumSpy = jest.spyOn(calc,"sum");
    expect(calc.sum(1,2)).toBe(3);
    expect(sumSpy).toHaveBeenCalledTimes(1);
    expect(sumSpy).toHaveBeenCalledWith(1,1,2);  // 1回目の呼び出しは引数1,2で呼び出した検証
})

test("Spy_挙動変更あり",() => {
    const calc = new Calculator();
    const sumSpy = jest.spyOn(calc,"sum");
    sumSpy.mockImplementation((a:number ,b:number) => a-b);  // 実装変更
    expect(calc.sum(5,2)).toBe(3);
    expect(sumSpy).toHaveBeenCalledTimes(1);
})
```

**クラス内のメソッド以外でも実装可能**  
[参考](https://dev.classmethod.jp/articles/jest-spyon-with-export-function/)


## jest.mock()

▼テスト対象

```javascript
import fs from "fs";

export const readFile = (path: string) => {
    const data = fs.readFileSync(path, {
        encoding:"utf-8"
    });
    return "This is " + data; 
}
```

```javascript
import fs2 from "fs";
import { readFile } from "./mock_module";

jest.mock("fs");
const mockFs = jest.mocked(fs2);
// readFileSyncメソッドを上書き
mockFs.readFileSync.mockImplementation(() => {
    return "abc";
})

test("readFile",() => {
    const result = readFile("efg");
    expect(result).toBe("This is abc");
})
```