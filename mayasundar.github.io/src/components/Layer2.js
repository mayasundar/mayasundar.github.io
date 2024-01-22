import React from "react";
import mayapaintstudio from "../assets/mayapaintstudio.jpeg"
import studentstay from "../assets/joinstudentstay.jpeg"
import Annetta from "../assets/Annetta.jpeg"
import mond from "../assets/mond.jpeg"
import outgoing from "../assets/outgoing.jpeg"
import observability from "../assets/observability.jpeg"
import mayasundar from "../assets/mayasundar.jpeg"

function Layer2() {
    return (

        <div className="ttab">
            <div className="ttab-text">
                <h1> Things I've Worked On ☺&#xFE0E;</h1>
            </div>

            <div className="tlist-tab-content">

                <div className="tbox">
                    <h4>Observability App · <div className="tool">React</div><div className="tool">Flask</div><div className="tool">Firebase</div></h4>
                    <p>I built a simple web app that displayed some posts, integrating it with
                        application performance monitoring tools.</p>
                    <p>I architected infrastructure tooling to configure Elasticsearch and Kibana
                        dashboards, log shipping with Filebeat, and tools like Grafana and Prometheus.</p>
                    <img src={observability} alt="observability screen"/>
                </div>

                <div className="tbox">
                    <h4>StudentStay (<a href="https://joinstudentstay.com" target="_blank" rel="noopener noreferrer">website</a>) · <div className="tool">React</div><div className="tool">Firebase</div><div className="tool">Tailwind</div><div className="tool">Figma</div><div className="tool">Jira</div></h4>
                    <p>For 6 months, I worked on designing the brand identity and wireframes
                        for a student-to-student subletting service, developing the website,
                        and devising the product roadmap and requirements.</p>
                    <p>I led weekly sprint planning meetings with the two other interns on the
                        development team, reporting back to the founders with the deployment timeline and issues
                        closed. I also led user interviews and incorporated
                        feedback before deployment. I closed 18 issues and helped ship the site.</p>
                    <img src={studentstay} alt="student stay screenshot"/>
                </div>

                <div className="tbox">
                    <h4>mayapaint.studio (<a href="https://mayapaint.studio" target="_blank" rel="noopener noreferrer">website</a>) · <div className="tool">React Native</div></h4>
                    <p>I created my digital artwork portfolio (painted in Procreate) as a music player.
                        This was one of my first React Native projects, and figuring out a video embed
                        that worked on both web and mobile was the most challenging problem.</p>
                    <img src={mayapaintstudio} alt="mayapaintstudio"/>
                </div>

                <div className="tbox">
                    <h4>Annetta Homes · <div className="tool">React</div><div className="tool">MongoDB</div><div className="tool">Figma</div><div className="tool">Blender</div></h4>
                    <p>For 3 months, I interned at a real estate startup and worked on the frontend
                        of the MVP. I worked on brand assets like the logo, landing page graphics, and
                        animations in Figma and Blender. I built out components for major pages
                        and made styling uniform.</p>
                    <img src={Annetta} alt="annetta landing"/>
                </div>

                <div className="tbox">
                    <h4>mond · <div className="tool">React Native</div><div className="tool">Flutter</div><div className="tool">Firebase</div><div className="tool">Jira</div></h4>
                    <p>For 6 months, I worked on a mobile app for improving dog-to-dog social
                        interactions & access to parks. I worked on integration with the Google
                        Maps API and the connection to our backend database of dog parks. I also
                        developed major components and built out the user's profile page.</p>
                    <p>I led the team through a migration from Flutter to React Native and modified sprint planning in Jira accordingly.</p>
                    <img src={mond} alt="mond app map"/>
                </div>

                <div className="tbox">
                    <h4>OutGoing · <div className="tool">React Native</div><div className="tool">Figma</div><div className="tool">Express</div></h4>
                    <p>I worked on design and development for a project in my User Interface Design class, where we ideated a design solution to a problem our fellow students were facing -- planning and executing outings in NYC.</p>
                    <p>I worked on the initial brand colors, buttons, and a handful of key wireframes. We worked on three iterations of the design with 4 user interviews between each iteration. Over a week and a half, we built the app in React Native with an Express/MongoDB backend.</p>
                    <img src={outgoing} alt="outgoing screen"/>
                </div>

                <div className="tbox">
                    <h4>mayasundar.com (<a href="https://mayasundar.com" target="_blank" rel="noopener noreferrer">website</a>) · <div className="tool">React</div><div className="tool">Figma</div></h4>
                    <p>Every so often, I redesign and rebuild my personal website. It's a fun way for me to experiment with new tools & get better with old ones. This version was remodeled in January 2023. Thanks for visiting! ☺&#xFE0E; </p>
                    <img src={mayasundar} alt="mayasundar.com screen"/>
                </div>


            </div>
        </div>

    );
}



export default Layer2