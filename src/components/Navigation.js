import React from 'react';

import './Navigation.css';
function Navigation() {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-item'>
                    01. <a href='./' id='01'>About Me</a>
                </div>
                <div className='navbar-item'>
                    02. <a href='./' id='02'>Experience</a>
                </div>
                <div className='navbar-item'>
                    03. <a href='./' id='03'>Projects</a>
                </div>
            </div>
        </>
    )
}

export default Navigation;