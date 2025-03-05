import m from "../../../../public/mond.jpeg";
import Image from "next/image";

export default function Mond() {
    return (
        <div>
            <div className="tbox">
                    <h3>mond</h3>
                <div>
                    {/*<a className="website" href="https://mayasundar.com/" target="_blank" rel="noopener noreferrer">*/}
                    {/*    website*/}
                    {/*</a>*/}
                    <div className="tool">React Native</div>
                    <div className="tool">Flutter</div>
                    <div className="tool">Firebase</div>
                    <p>For 6 months, I worked on a mobile app for improving dog-to-dog social interactions & helping dog owners find local parks.
                    </p>
                    <p>
                        I built out key components and integrated the Google Maps API and a database of dog parks with a search and filter system.
                    </p>
                </div>
                <div>
                    <Image src={m} alt="mond screen"/>
                </div>
            </div>
        </div>
    );
}
