import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TabContentContainer from "../components/TabContentContainer";

import "../index.css";

export default function NewHome() {

    return (
        <>
            <Navbar></Navbar>
            <div className="container clearfix">
                <p>This is New Home.</p>
            </div>
        </>
    );
}
