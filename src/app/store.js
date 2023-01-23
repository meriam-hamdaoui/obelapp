import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./reducer/userSlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore(
  {
    reducer: {
      user: userSlice,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);
