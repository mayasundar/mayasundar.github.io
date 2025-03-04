import cit from "../../../../public/cit.jpeg";
import Image from "next/image";

export default function ColumbiainTech() {
    return (
        <div>
            <div className="tbox">
                <div>Columbia in Tech
                    <a className="website" href="https://columbiaintech.com/" target="_blank" rel="noopener noreferrer">
                        website
                    </a>
                    ·
                    <div className="tool">Figma</div>
                    <div className="tool">Framer</div>
                </div>
                <p>Designed a simple website to display our organization's goals, events, and initiatives. </p>

                <Image src={cit} alt="columbia in tech screen"/>
            </div>
        </div>
    );
}
