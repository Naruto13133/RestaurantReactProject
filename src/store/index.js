
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import restaurantReducer from './restaurantSlice';

const store = configureStore({
  reducer: {
    auth: userReducer,
    restaurant : restaurantReducer
  },
});

export default store;
