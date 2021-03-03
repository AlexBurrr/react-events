import React from 'react'

const Nav = () => {
    return (
        <div className='nav-container'>
            <nav className='nav'>
                <i>Events</i>
                <input type="text" placeholder='search events' />
                <ul>
                    <li>
                        <span>sign in</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
