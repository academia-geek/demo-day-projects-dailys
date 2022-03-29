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
                    <Link to="/login" className='log'>Log in</Link>
                    <Link to="/registro" className='sign'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Header