import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer, { Todo } from "./todoSlice";

const saveToLocalStorage = (state: { todos: Todo[] }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("store", serializedState);
  } catch (error) {
    console.error(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error(error); 
    return undefined;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(), // Load state from localStorage
});

store.subscribe(() => saveToLocalStorage(store.getState())); // Save state to localStorage on every change

export default store;
