import React from 'react';
import Nav from './Nav';
import logo from '../img/logo.png';


const Header = () => {


    return (

        <>
            <header>
                <img className="logo-image" src= { logo } alt="Logo Image" />  
                <h1>Hi5 Interactive</h1>
                <Nav />
            </header>
        </>

    );
    
}
export default Header;