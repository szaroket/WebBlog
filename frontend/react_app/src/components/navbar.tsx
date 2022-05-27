import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export const mynavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Web Blog</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home" className="nav-item nav-link">Home</Link>
                    <Link to="/add-post" className="nav-item nav-link">Add Post</Link>
                </div>
            </div>
        </nav>
    )
}
