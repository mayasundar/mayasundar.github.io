import ah from "../../../../public/Annetta.jpeg";
import Image from "next/image";

export default function AnnettaHomes() {
    return (
        <div>
            <div className="tbox">
                    <h3>Annetta Homes</h3>
                    {/*<a className="website" href="https://columbiaintech.com/" target="_blank" rel="noopener noreferrer">*/}
                    {/*    website*/}
                    {/*</a>*/}
                <div>
                    <div className="tool">React</div>
                    <div className="tool">MongoDB</div>
                    <div className="tool">Figma</div>
                    <div className="tool">Blender</div>
                    <p> I worked on the frontend of the MVP for a real estate startup. </p>
                    <p>I created brand assets, including the logo, landing page graphics, and animations in Figma and Blender.
                        I built out components for major pages and made styling uniform.</p>
                </div>

                <div>
                    <Image src={ah} alt="annetta homes screen"/>
                </div>

            </div>
        </div>
    );
}
