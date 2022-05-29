import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import "./form.css"

const AddPost = () => {
    const [post, setState] = useState({
        title: "",
        content: "",
        author: "",
        slug: ""
    });

    function convertTitleToSlug(title: string) {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    }

    const handleChange = (e: any) => {
        const value = e.target.value;
        setState({
            ...post,
            [e.target.name]: value
        });
    };

    const submitPost = (e: any) => {
        e.preventDefault()
        const postData = {
            post_title: post.title,
            post_content: post.content,
            post_author: post.author,
            post_slug: convertTitleToSlug(post.title)
        }
        console.log(postData)
        axios.post("http://127.0.0.1:8000/post/create/", postData)
            .then((response: any) => {
                console.log(response);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    return (
        <Container fluid="md">
            <Row className="align-items-lg-center">
                <Col className="form-border">
                    <h1 className="form-header">create your post</h1>
                    <Form onSubmit={submitPost}>
                        <Form.Group controlId="formPostTitle">
                            <Form.Label className="form-label">Title</Form.Label>
                            <Form.Control name="title" onChange={handleChange} type="title"
                                          placeholder="Enter title"/>
                        </Form.Group>
                        <Form.Group controlId="formPostAuthor">
                            <Form.Label className="form-label">Author</Form.Label>
                            <Form.Control name="author" onChange={handleChange} type="author"
                                          placeholder="Enter author's name"/>
                        </Form.Group>
                        <Form.Group controlId="formTextarea">
                            <Form.Label className="form-label">Post content</Form.Label>
                            <Form.Control name="content" onChange={handleChange} as="textarea" rows={15} type="textarea"
                                          placeholder="Write our post here..."/>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" className="submit-button">Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddPost;