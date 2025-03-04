import og from "../../../../public/outgoing.jpeg";
import Image from "next/image";


export default function StudentStay() {
    return (
        <div>
            <div className="tbox">
                <div>Student Stay ·
                    <div className="tool">React Native</div>
                    <div className="tool">Express</div>
                    <div className="tool">Figma</div>
                </div>
                <p>I worked on design and development
                    for a project in my User Interface Design class, where we came up with a
                    design solution to a common problem our fellow students faced – planning and
                    executing outings with friends in NYC.
                </p>
                <p> I worked on the initial brand colors, buttons, and a handful of key wireframes. We worked over three iterations,
                    with 4 user interviews between each iteration. Over a week and a half,
                    we built the app in React Native with an Express/MongoDB backend.
                </p>
                <Image src={og} alt="outgoing screen"/>
            </div>
        </div>
    );
}

