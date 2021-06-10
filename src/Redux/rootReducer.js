import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icereducer from "./icecream/icecreamreducer";
import userReducer from './user/userReducer';
const rootReducer = combineReducers({
    ice:icereducer,
    cake:cakeReducer,
    user: userReducer
})
export default rootReducer;