import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }
  }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;

