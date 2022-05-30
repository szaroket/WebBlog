import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from "react-router-dom";
import {Card, Col} from "react-bootstrap";
import PostData from '../types/PostData';
import "../components/cards.css"

const DetailedPage = () => {
    const location = useLocation();
    const post = location.state as PostData;

    // To avoid problem with rendering main page
    if (post === null) {
        return (
            <div className="container">Loading...</div>
        )
    }

    const getDateFromIsoString = (dateString: string) => {
        const date = new Date(dateString);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    return (
        <div className="container">
            <Col className="col-lg-12">
                <Card className="card h-100" style={{borderRadius: "15px"}}>
                    <Card.Body>
                        <Card.Title className="card-title">{post.post_title}</Card.Title>
                        <Card.Text className="card-content-detail">{post.post_content}</Card.Text>
                        <Card.Footer
                            className="text-muted card-footer">{post.post_author}, {getDateFromIsoString(post.post_publish_date)}</Card.Footer>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default DetailedPage;