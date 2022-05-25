import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import PostData from './types/Tutorial';

export const MenuList = () => {
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
        <div className="row justify-content-center">
          <div className="col">
            {posts && posts.map((post, index) => (
                <div className="card my-3 w-25 mx-auto">
                  <div className="card-body">
                    <h2 className="card-title font-weight-bold">{post.post_author}</h2>
                    <h4 className="card-subtitle mb-2">{post.post_title}</h4>
                    <p className="card-text">{post.post_content}</p>
                  </div>
                  <div className="card-footer">
                    <div className="btn-group justify-content-around w-75 mb-1 " data-toggle="buttons">
                      <span>
                        <button className="btn btn-info">
                          Update
                        </button>
                      </span>
                      <span>
                        <button className="btn btn-danger">
                          Delete
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
            Web Blog
        </a>
      </nav>
      <div className="container m-10">
        {MenuList()}
      </div>
    </div>
  );
}

export default App;