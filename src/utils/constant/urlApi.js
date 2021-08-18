import { DOMAIN } from "./setting";

export const TODOLIST_PATH={
    ADD_PATH:`${DOMAIN}/ToDoList/AddTask`,
    GET_ALL_PATH:`${DOMAIN}/ToDoList/GetAllTask`,
    DELETE_PATH:`${DOMAIN}/ToDoList/deleteTask?taskName=`,
    DONE_PATH: `${DOMAIN}/ToDoList/doneTask?taskName=`,
    REJECT_PATH:`${DOMAIN}/ToDoList/rejectTask?taskName=`
}