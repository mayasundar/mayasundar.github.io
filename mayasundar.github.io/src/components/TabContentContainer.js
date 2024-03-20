import React from "react";
import TabContent from "./TabContent";

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
