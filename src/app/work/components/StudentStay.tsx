import s from "../../../../public/joinstudentstay.jpeg";
import Image from "next/image";


export default function StudentStay() {
    return (
        <div>
            <div className="tbox">
                <div>Student Stay ·
                    <div className="tool">React</div>
                    <div className="tool">Firebase</div>
                    <div className="tool">Tailwind</div>
                    <div className="tool">Figma</div>
                    <div className="tool">Jira</div>
                </div>
                <p>For 6 months, I worked on designing the brand identity and wireframes for a student-to-student subletting service, developing the website, and devising the product roadmap and requirements. </p>
                <p>I led weekly sprint planning meetings, reporting back to the founders with the deployment timeline and MVP progress. I conducted user interviews and incorporated feedback before deployment.</p>
                <Image src={s} alt="studentstay screen"/>
            </div>
        </div>
    );
}
