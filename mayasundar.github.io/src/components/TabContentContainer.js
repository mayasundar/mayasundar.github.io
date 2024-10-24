import React from "react";
import Layer1 from "./Layer1";
import Layer2 from "./Layer2";
import Layer3 from "./Layer3";

const TabContent = ({ layer }) => {
    return (
        <>
            {layer === 1 && <Layer1 />}
            {layer === 2 && <Layer2 />}
            {layer === 3 && <Layer3 />}
        </>
    );
};

const TabContentContainer = ({ selectedLayer }) => {
    return (
        <div className="tab-content-container">
            {selectedLayer === 2 ? (

                    <div className="tab-content-container">

                    <div className="tab-content">
                        <TabContent layer={selectedLayer} />
                    </div>
                    </div>
            ) : (
                <div className="tab-content-container">
                    <div className="tab-content">
                    <TabContent layer={selectedLayer} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabContentContainer;
