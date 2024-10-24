import './App.css';
import React from "react";
import Home from "./pages/Home";
import NewHome from "./pages/NewHome";

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
                    <Route path="/new" element={<NewHome/>} exact />
                </Routes>
            </BrowserRouter>
        </>
    );
}




export default App;
