import hs from "../../../../public/hibiscus-site.jpeg";
import Image from "next/image";


export default function HibiscusSans() {
    return (
        <div>
            <div className="tbox">
                <div>Hibiscus Sans
                    <a className="website" href="https://hibiscus-sans.vercel.app/" target="_blank" rel="noopener noreferrer">
                        website
                    </a>

                    · <div className="tool">Glyphs</div>
                    <div className="tool">Next.js</div>
                </div>
                <p>Produced a sans-serif typeface with flared terminals and a handwritten feel. Developed a minisite with Next.js. </p>
                <Image src={hs} alt="hibiscus sans screen"/>
            </div>
        </div>
    );
}
