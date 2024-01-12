import React from "react";
import Button from "./Button"

function Layer2() {
    const childTexts = [
        "mayapaint.studio",
        "mond",
        "Annetta Homes",
        "StudentStay",
        "This website"
    ];

    return (
        <div className="tab">
                <div className="list-tab-content">

                <div className="tab-text">
                <h1> Things I've Worked On ☺</h1>
                        {childTexts.map((text, index) => (
                            <div className="child" key={index}>
                                {text}
                            </div>
                        ))}
            </div>
        </div>        </div>

            );
}


export default Layer2