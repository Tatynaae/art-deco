import {combineReducers, createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {postReducer} from "./post/post-api";
import {mainReducer} from "./main/main-api";
const reducers = combineReducers({
    post : postReducer,
    main : mainReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
// npm install redux-devtools-extension --force
