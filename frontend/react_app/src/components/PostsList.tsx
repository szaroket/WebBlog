import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import PostData from '../types/PostData';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./cards.css"

const PostsList = () => {
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

    const cutPostIfTooMuchTest = (content: string) => {
        let maxLength = 350;
        if (content.length > maxLength) {
            content = content.substring(0, maxLength) + "...";
        }
        return content
    }

    return (
        <Row>
            {posts && posts.map((post, index) => (
                <Col className="col-4 mb-4">
                    <Card key={index} className="card h-100 mt-3" style={{borderRadius: "15px"}}>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{post.post_title}</Card.Title>
                            <Card.Text className="card-content">{cutPostIfTooMuchTest(post.post_content)}</Card.Text>
                            <Link className="read-more-text" to={`post/${post.post_slug}`} state={{...post}}><Button
                                className="read-more-button">Read more</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default PostsList;