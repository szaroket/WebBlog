import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsList from "../components/PostsList";

const HomePage = () => {
    return (
        <div className="container">
            {PostsList()}
        </div>
    )
}

export default HomePage;