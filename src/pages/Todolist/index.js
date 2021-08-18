/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskApi, deleteTaskApi, doneTaskApi, getAllTaskApi, rejectTaskApi } from '../../redux/actions/TodolistActions';
import gb from './bg.png';
import './style.css';



export default function Todolist() {
    const [state, setstate] = useState({ newTask: '' });
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.TodolistReducer.todoList)

    useEffect(() => {
        getAllTask();
    }, []);

    const getAllTask = () => dispatch(getAllTaskApi())

    const handleChange = (event) => {
        setstate({ ...state, newTask: event.target.value })
    }

    const handleSubmit = () => {
        if (state.newTask === '') return
        dispatch(addTaskApi(state.newTask));
        setstate({ ...state, newTask: '' })
    }

    const handleDeleteTask = (taskName) => {
        dispatch(deleteTaskApi(taskName));
    }

    const handleDoneTask = (taskName) => {
        dispatch(doneTaskApi(taskName));
    }

    const handleRejectTask = (taskName) => {
        dispatch(rejectTaskApi(taskName));
    }


    const renderUncompletedTask = () => {
        return todoList?.filter((task) => !task.status).map((task, index) => {
            return (
                <li key={index}>
                    <span>{task.taskName}</span>
                    <div className="buttons">
                        <button className="remove" onClick={() => handleDeleteTask(task.taskName)}>
                            <i className="fa fa-trash-alt" />
                        </button>
                        <button className="complete" onClick={() => handleDoneTask(task.taskName)}>
                            <i className="far fa-check-circle" />
                            <i className="fas fa-check-circle" />
                        </button>
                    </div>
                </li>
            )
        })
    }

    const renderCompletedTask = () => {
        return todoList?.filter((task) => task.status).map((task, index) => {
            return (
                <li key={index}>
                    <span>{task.taskName}</span>
                    <div className="buttons">
                        <button className="remove" onClick={() => handleDeleteTask(task.taskName)}>
                            <i className="fa fa-trash-alt" />
                        </button>
                        <button className="complete" onClick={() => handleRejectTask(task.taskName)}>
                            <i className="far fa-check-circle" />
                            <i className="fas fa-check-circle" />
                        </button>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className="todoApp">
            <div className="card">
                <div className="card__header">
                    <img src={gb} alt="bg" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input id="newTask" type="text" placeholder="Enter an activity..." value={state.newTask} onChange={handleChange} />
                            <button id="addItem" onClick={handleSubmit}>
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {renderUncompletedTask()}
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {renderCompletedTask()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
