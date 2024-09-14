import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const axiosFunc = jest.mocked(axios);

test("axiosモックテスト", async () => {
  axiosFunc.get.mockImplementation(
    (): Promise<{ data: { name: string; from: string }[] }> => {
      return Promise.resolve({
        data: [
          { name: "小林剛", from: "東京" },
          { name: "瑞原明奈", from: "長崎" },
        ],
      });
    }
  );
  await expect(Users.all()).resolves.toEqual([
    { name: "小林剛", from: "東京" },
    { name: "瑞原明奈", from: "長崎" },
  ]);
  axiosFunc.get.mockClear();
});
test("axiosモックテスト", async () => {
  //axiosFunc.get.mockRejectedValue(new Error("error"))
  axiosFunc.get.mockImplementation(() => Promise.reject(new Error("error")));
  await expect(Users.all()).rejects.toThrow("error");
});
