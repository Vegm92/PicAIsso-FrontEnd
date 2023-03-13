import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { imagesReducer } from "./features/imagesSlice/imagesSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    image: imagesReducer,
  },
});

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  image: imagesReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const testStore = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
