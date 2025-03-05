import hs from "../../../../public/hibiscus-site.jpeg";
import Image from "next/image";


export default function HibiscusSans() {
    return (
        <div>
            <div className="tbox">
                    <h3>Hibiscus Sans</h3>

                    <div>
                    <a className="website" href="https://hibiscus-sans.vercel.app/" target="_blank" rel="noopener noreferrer">
                        website
                    </a>
                    <div className="tool">Glyphs</div>
                    <div className="tool">Next.js</div>
                <p>Produced a sans-serif typeface with flared terminals and a handwritten feel. Developed a minisite with Next.js. </p>
                </div>

                <div>
                <Image src={hs} alt="hibiscus sans screen"/>
                </div>
            </div>
        </div>
    );
}
