import fq from "../../../../public/fourquadrants.jpeg";
import Image from "next/image";

export default function FourQuadrants() {
    return (
        <div>
            <div className="tbox">
                    <h3>Four Quadrants</h3>

                <div>
                <a className="static website" href="https://mayasundar.com/four-quadrants/" target="_blank" rel="noopener noreferrer">
                        website
                    </a>
                    <div className="tool">Socket.io</div>
                    <div className="tool">Next.js</div>
                    <p>A socket.io project that lets users collaboratively create matrices like the NY Mag Approval Matrix.
                    </p>
                </div>

                <div>
                    <Image src={fq} alt="four quadrants screen"/>
                </div>
            </div>
        </div>
    );
}
