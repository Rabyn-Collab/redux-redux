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
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      setTodos(state.todos);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo);;
      setTodos(state.todos);
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

