import { createSlice } from "@reduxjs/toolkit";
import { getTodos, setTodos } from "./local";


const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: getTodos()
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setTodos(state.todos);
    }
  }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;

