import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { cartReducer } from "./Reducers/Cart";
import {
  orderDetailReducer,
  orderListReducer,
  orderPaymentReducer,
} from "./Reducers/Order";
import { productListReducer, productReducer } from "./Reducers/Product";
import { userLoginReducer, userRegisterReducer } from "./Reducers/User";
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  //combine all reducers
  productListReducer,
  productReducer,
  userLoginReducer,
  userRegisterReducer,
  cartReducer,
  orderDetailReducer,
  orderPaymentReducer,
  orderListReducer,
});

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
