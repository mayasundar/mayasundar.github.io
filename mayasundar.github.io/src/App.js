import './App.css';
import React from "react";
import Home from "./pages/Home";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} exact />

                </Routes>
            </BrowserRouter>
        </>
    );
}




export default App;
