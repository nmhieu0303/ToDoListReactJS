import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {
    const userLogin = useSelector(state => state.TodolistReducer.currentUser)
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active_link" className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active_link" className="nav-link" to="/about-us">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active_link" className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active_link" className="nav-link" to="/login">Login</NavLink>
                        </li>
                        {userLogin ?
                            (<>
                                <li className="nav-item">
                                    <NavLink activeClassName="active_link" className="nav-link" to="/todolist">To do list Redux-Thunk</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active_link" className="nav-link" to="/todolist-saga">To do list Redux-Saga</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active_link" className="nav-link" to="/profile">Profile</NavLink>
                                </li>
                            </>) : ''
                        }
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};



export default Header;
