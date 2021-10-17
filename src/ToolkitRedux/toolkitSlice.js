import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["", "", ""],
    visible: false,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
    toggleVisible(state) {
      state.visible = !state.visible;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  increment,
  decrement,
  addTodo,
  removeLastTodo,
  incrementByAmount,
  toggleVisible,
} = toolkitSlice.actions;
