import {combineReducers} from 'redux';

// for local storage
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// local storage config
const presistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(presistConfig, rootReducer);
