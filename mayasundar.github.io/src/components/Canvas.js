import React from "react";
import "../index.css";
// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const images = [
    { fileName: image4, tab: "tab1", zIndex: 1},
    { fileName: image5, tab: "tab2", zIndex: 2},
    { fileName: image6, tab: "tab3", zIndex: 3},
];

function Canvas(props) {
    const {activeTab} = props;

    return (
        <div>
            {images.map((image, index) => {
                if (activeTab === image.tab || activeTab > image.tab) {
                    return (
                        <img key={index} src={image.fileName} alt={`${index + 1}`} style={{zIndex: image.zIndex}}/>
                    );
                }
                return null;
            })}
        </div>
    );
}
export default Canvas;
