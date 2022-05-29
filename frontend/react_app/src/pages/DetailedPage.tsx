import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from "react-router-dom";

const DetailedPage = () => {
    let post = useLocation().state
    console.log(post)
    return (
        <div className="container">
            post
        </div>
    )
}

export default DetailedPage;