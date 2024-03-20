import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import TabContentContainer from "../components/TabContentContainer";

import "../index.css";

export default function Home() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [selectedLayer, setSelectedLayer] = useState(1);
    const handleLayerClick = (layer) => {
        setSelectedLayer(layer);
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="container clearfix">
                <Panel
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    selectedLayer={selectedLayer}
                    handleLayerClick={handleLayerClick}
                />
                <TabContentContainer selectedLayer={selectedLayer} />
            </div>
        </>
    );
}
