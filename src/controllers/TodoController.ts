import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [new Todo(Math.random().toString(), "initial")];

export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res
    .status(201)
    .json({ message: "TODOの作成に成功しました", createdTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res) => {
  res.status(200).json(TODOS);
};

export const changeTodo: RequestHandler<
  { id: string },
  { message: string; changeTodo: Todo[] },
  { text: string }
> = (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  //const text = (req.body as {text: string}).text;
  const index = TODOS.findIndex((con) => {
    return con.id === id;
  });
  if (index >= 0) {
    TODOS[index] = new Todo(id,text);
  } else {
    throw new Error("TODOないよんさま:patch");
  }
  res
    .status(200)
    .json({ message: "TODOの修正に成功しました", changeTodo: TODOS });
};

export const deleteTodo:RequestHandler<{id: string}> = (req,res) => {
    const id = req.params.id;
    const index = TODOS.findIndex(cond => {
        return cond.id === id;
    })
    if( index >= 0){
        TODOS.splice(index,1);
    }else{
        throw new Error("TODOないよんさま:delete");
    }
    res.status(200).json({message:"削除完了",remainTodo: TODOS});
}

export const getIds : RequestHandler = (req,res) => {
  const todoids = TODOS.map((todo) => {
    return todo.id;
  });
  res.status(200).json({ids:todoids});
}