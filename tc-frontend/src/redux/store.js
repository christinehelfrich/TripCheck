import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
  } from "redux-persist";
  import { combineReducers } from "redux";
 import userReducer from "./userSlice";

const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}

  const reducers = combineReducers({
    user: userReducer,
  });

const store = configureStore({
  devTools: true,
  reducer: reducers,
  // here we restore the previously persisted state
  preloadedState: loadState(),
});

store.subscribe(()=>{

    saveState(store.getState());

})
export let persistor = persistStore(store);
export default store;