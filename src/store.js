//Import create store and apply middleware
import {createStore, compose, applyMiddleware} from "redux";
//import thunk from redux thunk
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const initialState ={};

const middleware = [thunk];

const store =createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtention ? window.devToolsExtention(): f=>f
    )
)

export default store;
