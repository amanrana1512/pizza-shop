import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import {placeOrderReducer,getUserOrderReducer,AllUserOrderReducer} from './reducers/orderReducer'

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer:getUserOrderReducer,
  addPizzaReducer:addPizzaReducer,
  getPizzaByIdReducer:getPizzaByIdReducer,
  updatePizzaByIdReducer:updatePizzaByIdReducer,
  AllUserOrderReducer:AllUserOrderReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  }
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
