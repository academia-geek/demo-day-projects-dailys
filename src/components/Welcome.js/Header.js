import React from 'react'
import "../../styles/landing/stylesLanding.css"

const Header = () => {
    return (
        <div>

            <div className='header'>

                <div className='brand'>
                Dailys
                </div>

                <div className='buttons'>
                    <button className='log'>Log in</button>
                    <button className='sign'>Sign Up</button>
                </div>

            </div>

        </div>
    )
}

export default Header