import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./ToolkitRedux/count/toolkitReducers";
import { toggleElement } from "./ToolkitRedux/toggle/toggleReducer";
import {
  addTodo,
  decrement,
  increment,
  incrementByAmount,
  removeLastTodo,
  toggleVisible,
} from "./ToolkitRedux/toolkitSlice";

function App() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.toolkit.count);
  const box = useSelector((state) => state.toggle.box);
  const todos = useSelector((state) => state.toolkitslice.todos);
  const count = useSelector((state) => state.toolkitslice.count);
  const visible = useSelector((state) => state.toolkitslice.visible);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>increment</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        incrementByAmount
      </button>

      <button onClick={() => dispatch(toggleElement())}>TOGGLE</button>
      {box ? "Hello" : "Bye"}

      <button onClick={() => dispatch(toggleVisible())}>TOGGLE</button>
      {visible ? "Visible" : "Hidden"}

      <button onClick={() => dispatch(addTodo(prompt()))}>ADDTODO</button>
      <button onClick={() => dispatch(removeLastTodo())}>REMOVE</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
