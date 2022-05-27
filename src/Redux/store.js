import {createStore,combineReducers,applyMiddleware}from "redux";
 import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { movieListReducer } from "./Reducers/MovieReducers";
const reducer=combineReducers({ 
   movieList:movieListReducer 
})

const initialState={} 

const middleware=[thunk]

const store=createStore(
reducer,
initialState,
composeWithDevTools(applyMiddleware(...middleware))

) 
export default store;