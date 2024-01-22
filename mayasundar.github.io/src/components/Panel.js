import React, {useEffect, useState} from "react";
import "../index.css";
import Button from "./Button";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import Layer1 from "./Layer1"
import Layer2 from "./Layer2"
import Layer3 from "./Layer3"

const images = [
    { fileName: image1, tab: "tab1", zIndex: 1},
    { fileName: image2, tab: "tab2", zIndex: 2},
    { fileName: image3, tab: "tab3", zIndex: 3},
];
let componentRender;

function Panel(props) {
    const [visibleLayers, setVisibleLayers] = useState([]);
    const [selectedLayer, setSelectedLayer] = useState(1);

    useEffect(() => {
        setVisibleLayers([images[0]]);
    }, []);


    const handleLayerClick = (layer) => {
        let newVisibleLayers = [];
        if (layer === 1) {
            newVisibleLayers = [images[0]];
        } else if (layer === 2) {
            newVisibleLayers = [images[0], images[1]];
        } else if (layer === 3) {
            newVisibleLayers = images;
        }
        setVisibleLayers(newVisibleLayers);
        setSelectedLayer(layer);
    };

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
            <div className="canvas-text-container">

            {selectedLayer === 1 && <Layer1 />}
            {selectedLayer === 2 && <Layer2 />}
            {selectedLayer === 3 && <Layer3 />}
            </div>

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
