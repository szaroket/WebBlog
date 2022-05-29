import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from "react-router-dom";
import {Card} from "react-bootstrap";
import PostData from '../types/PostData';

const DetailedPage = () => {
    const location = useLocation();
    const post = location.state as PostData;
    console.log(post)

    // To avoid problem with rendering main page
    if (post === null) {
        return (
            <div className="container">Loading...</div>
        )
    }

    return (
        <div className="container">
            <Card className="card h-100">
                <Card.Body>
                    <Card.Title className="text-center">{post.post_title}</Card.Title>
                    <Card.Text>{post.post_content}</Card.Text>
                    <Card.Footer className="text-muted">{post.post_author}</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailedPage;