import React from 'react'

import Button from './Button'

function Header({ title }) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color="teal"
                text="Add Task"
                onClick={() => console.log('Button Clicked')}
            />
        </header>
    )
}

export default Header
