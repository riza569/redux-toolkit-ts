import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
// const reduxlogger = require("redux-logger");
// const logger = reduxlogger.createLogger();
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatc = typeof store.dispatch;
