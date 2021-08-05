import React, { useState, useContext } from 'react'
import { UserContext } from '../commons/UserContext'

const Login = () => {
    const [signIn, setSignIn] = useState({ username: '', password: '' })
    const { setAuth } = useContext(UserContext)

    return (
        <div className="container">
            <header className="header">
                <h1>Login Page</h1>
            </header>
            <form
                className="add-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    if (
                        signIn.username === 'admin' &&
                        signIn.password === 'admin'
                    ) {
                        setAuth(true)
                    }
                }}
            >
                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Your username..."
                        value={signIn.username}
                        onChange={(e) =>
                            setSignIn({ ...signIn, username: e.target.value })
                        }
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Your username..."
                        value={signIn.password}
                        onChange={(e) =>
                            setSignIn({ ...signIn, password: e.target.value })
                        }
                    />
                </div>
                <input className="btn btn-block" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
