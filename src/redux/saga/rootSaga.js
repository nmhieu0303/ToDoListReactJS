import { all } from "redux-saga/effects";
import todoList from "./TodolistSaga";

export function* rootSaga() {
    yield all([
        todoList()
    ]);
}