import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodolistTypes } from '../../redux/types/TodolistTypes'

export default function Login(props) {
    const dispatch = useDispatch()
    const [state, setstate] = useState({
        username:'admin',
        password:'admin',
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setstate({...state, [name]:value})
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        if(state.username==='admin'&&state.password==='admin'){
            localStorage.setItem('userLogin',JSON.stringify(state.username));
            dispatch({type: TodolistTypes.LOGIN,currentUser:state.username})
            props.history.goBack();
        }
        else alert('Login Fail')
    }
    return (
        <div className="container">
            <h1 className="display-1 text-center">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" value={state.username} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={state.password} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
