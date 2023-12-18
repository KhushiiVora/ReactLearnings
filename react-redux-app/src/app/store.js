import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import cakeReducer from "../features/cake/cakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;
