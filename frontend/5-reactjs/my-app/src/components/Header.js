import React from 'react'
import './Header.css'

//simple react component (functional component)
//returns a JSX format (html-like syntax) 
const Header= props =>{
    return (
        <header className='header'>
            <h1>My Shop</h1>
        </header>
    );
};

export default Header;