import React from 'react';
import Nav from './Nav';


const Header = () => {


    return (

        <>
            <header>
                <img className="logo-image" src="../img/logo.png" alt="Logo Image" />  
                <h1>Hi5 Interactive</h1>
                <Nav />
            </header>
        </>

    );
    
}
export default Header;