import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

// import LayersPanel from "../components/LayersPanel";
// import Canvas from "../components/Canvas";
// import Draggable from 'react-draggable';

import "../index.css";

export default function Home() {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <Navbar></Navbar>
            {/*<h1 className="name">Maya Sundar</h1>*/}


            <div className="container clearfix">
                {/*<LayersPanel activeTab={activeTab} setActiveTab={setActiveTab} />*/}
                <Panel activeTab={activeTab} setActiveTab={setActiveTab} />
                {/*<Draggable handle="#handle">*/}
                {/*<div className="canvas-container">*/}
                {/*    <Canvas activeTab={activeTab} />*/}
                {/*</div>*/}
                {/*</Draggable>*/}

            </div>
        </>
    );
}
