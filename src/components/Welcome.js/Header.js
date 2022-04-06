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
                   <button className='log1'><Link to="/login" className='link-log'>Log in</Link></button> 
                   <button  className='sign1'> <Link to="/registro" className='link-sign'>Sign Up</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Header