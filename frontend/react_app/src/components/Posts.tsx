import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import PostData from '../types/PostData';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Col, Row} from "react-bootstrap";

export const PostsList = () => {
    const [posts, setPosts] = useState<Array<PostData>>([]);
    useEffect(() => {
        retrieveAllPosts();
    }, []);
    const retrieveAllPosts = () => {
        axios
            .get(`http://127.0.0.1:8000/posts`)
            .then((response: any) => {
                setPosts(response.data);
                console.log(posts);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    return (
        <Row>
            {posts && posts.map((post, index) => (
            <Col className="col-4">
            <Card key={index} className="card h-100">
        <Card.Body>
            <Card.Title>{post.post_title}</Card.Title>
        <Card.Text>{post.post_content}</Card.Text>
        </Card.Body>
        </Card>
        </Col>
))}
    </Row>
)
}