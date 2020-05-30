import React from 'react'
import {Link } from 'react-router-dom'

const Login = ()=>{
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="text"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light #90a4ae blue-grey lighten-2">
                    Login
                </button>
                <h5>
                    <Link to="/signup">new here?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Login