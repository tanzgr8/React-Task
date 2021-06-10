import { createStore,applyMiddleware  } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import thunk from 'redux-thunk'
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware( thunk))
  )
 export default store;