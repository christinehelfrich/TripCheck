import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  // import storage from "redux-persist/lib/storage";

 import userReducer from "./userSlice";

  // const persistConfig = {
  //   key: "root",
  //   version: 1,
  //   storage,
  // };

  //const rootReducer = persistReducer(persistConfig, userReducer);

  function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

const store = configureStore({
  reducer: { user: userReducer},
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

store.subscribe(() => saveToLocalStorage(store.getState()));
export let persistor = persistStore(store);
export default store;