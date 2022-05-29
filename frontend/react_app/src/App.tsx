import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import {mynavbar} from "./components/navbar";
import AddPost from "./pages/AddPost";
import HomePage from "./pages/HomePage";
import DetailedPage from "./pages/DetailedPage";
import './App.css'

function App() {
    return (
        <div className="App">
            {mynavbar()}
            <Routes>
                <Route path="/" element={HomePage()}></Route>
                <Route path="/add-post" element={AddPost()}></Route>
                <Route path="/post/*" element={DetailedPage()}></Route>
            </Routes>
        </div>
    );
}

export default App;