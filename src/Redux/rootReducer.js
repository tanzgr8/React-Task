import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icereducer from "./icecream/icecreamreducer";
const rootReducer = combineReducers({
    ice:icereducer,
    cake:cakeReducer
})
export default rootReducer;