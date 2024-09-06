import {configureStore} from '@reduxjs/toolkit';
  import { combineReducers } from "redux";
 import userReducer from "./userSlice";
import { isTokenValid } from '../services/backend/authService';

const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    isTokenValid(JSON.parse(serializedState).user.user.token).then((res) => {
      if(res?.response?.status === 401) return undefined

    })
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
export default store;