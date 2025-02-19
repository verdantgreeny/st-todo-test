import React, { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일 1",
      content: "할 일 1 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일 2",
      content: "할 일 2 내용",
      isDone: true,
    },
    {
      id: 3,
      title: "할 일 3",
      content: "할 일 3 내용",
      isDone: false,
    },
  ]);

  const value = { todos, setTodos };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;
