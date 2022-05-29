import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {mynavbar} from "./components/navbar";
import AddPost from "./pages/AddPost";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Router>
                {mynavbar()}
                <Routes>
                    <Route path="/" element={HomePage()}></Route>
                    <Route path="/add-post" element={AddPost()}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;