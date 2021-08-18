import React from 'react'
import {Redirect} from 'react-router-dom'

export default function Profile(props) {
    const userLogin =  JSON.parse(localStorage.getItem('userLogin'))
    if(!userLogin){
        alert('Please login!!')
        return <Redirect to='/login'/>}
    return (
        <div>
            <h1 className="display-1 text-center">Profile</h1>
            <p className="display-4 text-center">{`Username :${userLogin}`}</p>
        </div>
    )
}
