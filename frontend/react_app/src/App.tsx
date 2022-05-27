import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {PostsList} from './components/Posts'

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Web Blog</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/home">Home</a>
                    <a className="nav-item nav-link" href="/add-post">Add Post</a>
                </div>
            </div>
        </nav>
        <div className="container">
            {PostsList()}
        </div>
    </div>
  );
}

export default App;