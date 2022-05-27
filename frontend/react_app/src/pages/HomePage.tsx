import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PostsList} from "../components/Posts";


const HomePage = () => {
    return (
        <div className="container">
            {PostsList()}
        </div>
    )
}

export default HomePage;