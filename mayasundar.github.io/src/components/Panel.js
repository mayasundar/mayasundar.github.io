import React, {useEffect, useState} from "react";
import "../index.css";
import Button from "./Button";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import TabContentContainer from "./TabContentContainer";
import Layer1 from "./Layer1"
import Layer2 from "./Layer2"
import Layer3 from "./Layer3"

const images = [
    { fileName: image1, tab: "tab1", zIndex: 1},
    { fileName: image2, tab: "tab2", zIndex: 2},
    { fileName: image3, tab: "tab3", zIndex: 3},
];
let componentRender;

function Panel({ activeTab, setActiveTab, selectedLayer, handleLayerClick }) {
    const [visibleLayers, setVisibleLayers] = useState([]);

    useEffect(() => {
        setVisibleLayers([images[0]]);
    }, []);

    return (
        <div className="panel-container">
            <p className="panel-text">Layers</p>

            <div className="layers">
                <div className="button-div">
                <Button label="Layer 1" onClick={() => handleLayerClick(1)}
                        isActive={selectedLayer === 1}
                ></Button>
                <Button label="Layer 2" onClick={() => handleLayerClick(2)}
                        isActive={selectedLayer === 2}
                ></Button>
                <Button label="Layer 3" onClick={() => handleLayerClick(3)}
                        isActive={selectedLayer === 3}
                ></Button>
                </div>
            </div>
            <p className="canvas-text">Canvas</p>
            {/*<div className="canvas-text-container">*/}
            {/*    <TabContentContainer selectedLayer={selectedLayer} />*/}
            {/*</div>*/}

            <div className="canvas-big-container">
            <div className="canvas-container">
                <div className="canvas-panel">
                    {images.map((image) => (
                        visibleLayers.includes(image) && (
                            <img
                                key={image.tab}
                                src={image.fileName}
                                alt={`Layer ${image.zIndex}`}
                                className="canvas-image"
                                style={{ zIndex: image.zIndex }}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Panel;
