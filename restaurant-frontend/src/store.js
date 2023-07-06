import { createStore , combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";   //thunk used for usiing applymiddleware
import { allRestReducers } from "./Reducers/allrestReducers";



const reducers = combineReducers({allRestReducers})
const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store ;