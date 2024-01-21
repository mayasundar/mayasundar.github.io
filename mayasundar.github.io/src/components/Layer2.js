import React from "react";
import mayapaintstudio from "../assets/mayapaintstudio.jpeg"
import studentstay from "../assets/joinstudentstay.jpeg"
import Annetta from "../assets/Annetta.jpeg"
import mond from "../assets/mond.jpeg"
import outgoing from "../assets/outgoing.jpeg"
import observability from "../assets/observability.jpeg"

function Layer2() {
    return (

        <div className="ttab">
            <div className="ttab-text">
                <h1> Things I've Worked On ☺</h1>
            </div>

            <div className="tlist-tab-content">

                <div className="tbox">
                    <h4>Observability App</h4>
                    <p>A simple posting web app integrated with application performance monitoring and log shipping tools like Prometheus, Filebeat, Grafana, and Elastic.</p>
                    <img src={observability} alt="observability screen" height={200} width={313.1}/>
                </div>

                <div className="tbox">
                    <h4>StudentStay (<a href="https://joinstudentstay.com" target="_blank" rel="noopener noreferrer">website</a>) </h4>
                    <p>For 6 months, I worked on designing brand identity and wireframes, developing a website, and creating the roadmap for the product.</p>
                    <img src={studentstay} alt="student stay screenshot" height={200} width={313.1}/>
                </div>

                <div className="tbox">
                    <h4>mayapaint.studio (<a href="https://mayapaint.studio" target="_blank" rel="noopener noreferrer">website</a>) </h4>
                    <p>My Procreate digital work portfolio as a music player, built in React Native.</p>
                    <img src={mayapaintstudio} alt="mayapaintstudio" height={200} width={313.1}/>
                </div>

                <div className="tbox">
                    <h4>Annetta Homes</h4>
                    <p>For 3 months, I interned at a real estate startup and worked on the frontend of the MVP.</p>
                    <img src={Annetta} alt="annetta landing" height={200} width={313.1}/>
                </div>

                <div className="tbox">
                    <h4>mond</h4>
                    <p>For 6 months, I worked on a mobile app for improving dog-to-dog social interactions & access to parks.</p>
                    <img src={mond} alt="mond app map" height={200} width={313.1}/>
                </div>

                <div className="tbox">
                    <h4>OutGoing</h4>
                    <p>I worked on design and development for a project in my User Interface Design class, where we ideated a design solution to a problem our fellow students were facing -- planning and executing outings in NYC.</p>
                    <img src={outgoing} alt="outgoing screen" height={200} width={313.1}/>
                </div>

        </div>
        </div>

    );
}



export default Layer2