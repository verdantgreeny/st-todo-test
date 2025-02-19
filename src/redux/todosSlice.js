import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
  {
    id: 4,
    title: "할 일 4",
    content: "할 일 4 내용",
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return [...state].filter((todo) => todo.id !== action.payload.id);
    },
    doneTodo: (state, action) => {
      return [...state].map((t) => {
        if (t.id === action.payload) {
          return {
            ...t,
            isDone: !t.isDone,
          };
        } else {
          return t;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, doneTodo } = todosSlice.actions;
export default todosSlice.reducer;
