import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface RootState {
  todos: Todo[];
}

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state: Todo[], action) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo: Todo) => todo.id === action.payload);
      if (todo) {
        (todo as Todo).completed = !(todo as Todo).completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo: Todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
