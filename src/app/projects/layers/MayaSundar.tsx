import ms from "../../../../public/mayasundar.jpeg";
import Image from "next/image";

export default function MayaSundar() {
    return (
        <div>
            <div className="tbox">
                <h3>mayasundar.com</h3>

                <div>
                    <a className="website" href="https://mayasundar.com/" target="_blank" rel="noopener noreferrer">
                        website
                    </a>
                    <div className="tool">Next.js</div>
                    <p>Every so often, I redesign and rebuild my personal website.
                        It's a fun way for me to experiment with new tools & get better with old ones.
                        This version was remodeled in March 2025. Thanks for visiting! ☺︎
                    </p>
                </div>

                <div>
                    <Image src={ms} alt="portfolio screen"/>
                </div>

            </div>
        </div>
    );
}
