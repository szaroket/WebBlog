import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import PostData from './types/PostData';
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div>
            {posts && posts.map((post, index) => (
                <div className="card">
                    <h5 className="card-header">{post.post_title}</h5>
                    <div className="card-body">
                        <p className="card-text">{post.post_content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

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