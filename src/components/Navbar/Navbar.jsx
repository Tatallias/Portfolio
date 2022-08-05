import React from 'react'

import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div>
                Logo
            </div>
            <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar