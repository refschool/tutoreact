import React, { Component } from 'react';


const NavBar = (props) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#" >
                Navbar {props.count}
            </a>
        </nav >
    )
}


export default NavBar;