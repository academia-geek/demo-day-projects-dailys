import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/landing/stylesLanding.css"

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='brand'>
                    Dailys
                </div>
                <div className='buttons'>
                    <button className='log'><Link to="/login">Log in</Link></button>
                    <button className='sign'><Link to="/registro">Sign Up</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Header