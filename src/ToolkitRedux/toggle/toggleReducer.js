import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  box: false,
};
export const toggleElement = createAction("TOGGLE_BOX");

export default createReducer(initialState, {
  [toggleElement]: (state) => {
    state.box = !state.box;
  },
});
