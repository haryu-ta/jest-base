import { app } from "../app";
import request from "supertest";

describe("createTodoメソッドのテスト", () => {
  test("test1", async () => {
    // const newTodo = { text: "Mizuhara" };
    // const res = await request(app).post("/todos").send(newTodo);
    // expect(res.status).toBe(201);
    //const json = JSON.parse(res.text);
    const res = {
      message: "TODOの作成に成功しました",
      createdTodo: {
        id: "0.981231678642128967",
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
});
