import React, { useState } from 'react'
import { UserContext } from './commons/UserContext'
import Home from './pages/Home'
import Login from './pages/Login'

// Test github

function App() {
    const [auth, setAuth] = useState(false)
    return (
        <UserContext.Provider value={{ auth, setAuth }}>
            {auth ? <Home /> : <Login />}
        </UserContext.Provider>
    )
}

export default App
