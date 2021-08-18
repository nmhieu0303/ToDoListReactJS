import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxThunk from 'redux-thunk';
import TodolistReducer from './reducers/TodolistReducer';
import LoadingReducer from './reducers/LoadingReducer';
import { rootSaga } from "./saga/rootSaga";


const middlewareSaga = createSagaMiddleware()


const rootReducer = combineReducers({
    TodolistReducer,
    LoadingReducer
})

const store =  createStore(rootReducer,applyMiddleware(reduxThunk,middlewareSaga));

middlewareSaga.run(rootSaga);


export default store;