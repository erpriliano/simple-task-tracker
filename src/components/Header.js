import React from 'react'

import Button from './Button'

function Header({ title, onClick }) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="teal" text="Logout" onClick={onClick} />
        </header>
    )
}

export default Header
