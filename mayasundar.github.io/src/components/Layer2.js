import React from "react";
import Button from "./Button"
import mayapaintstudio from "../assets/mayapaintstudio.jpeg"
import studentstay from "../assets/joinstudentstay.jpeg"

function Layer2(){
    return (
        <div className="tab">
                <div className="list-tab-content">

                <div className="tab-text">
                <h1> Things I've Worked On ☺</h1>
                    <div className="box">
                        <p>Observability App</p>
                        <li>A simple posting web app integrated with application performance monitoring and log shipping tools like Prometheus, Filebeat, Grafana, and Elastic.</li>
                    </div>

                    <div className="box">
                        <p>mayapaint.studio</p>
                        <img src={mayapaintstudio} alt="mayapaintstudio" height={200}/>

                    </div>

                    <div className="box">
                        <p>StudentStay</p>
                        <img src={studentstay} alt="student stay screenshot" height={200}/>

                    </div>


                    <div className="box">
                        <p>mond</p>

                    </div>
                    <div className="box">
                        <p>Annetta Homes</p>

                    </div>
                    <div className="box">
                        <p>Letterboxd Database</p>

                    </div>
                    <div className="box">
                        <p>OutGoing</p>

                    </div>


                </div>
        </div>        </div>

            );
}


export default Layer2