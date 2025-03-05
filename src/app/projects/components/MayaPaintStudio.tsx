import mp from "../../../../public/mayapaintstudio.jpeg";
import Image from "next/image";

export default function MayaPaintStudio() {
    return (
        <div>
            <div className="tbox">
                <h3>mayapaint.studio</h3>

                <div>
                    <a className="website" href="https://mayapaint-mayasundar.vercel.app/" target="_blank" rel="noopener noreferrer">
                        website
                    </a>
                    <div className="tool">React Native</div>
                    <p>I created my digital artwork portfolio (painted in Procreate) as a music player. </p>
                    <p>This was one of my first React Native projects,
                        and figuring out a video embed that worked on both web and mobile was the most challenging problem.
                    </p>
                </div>

                <div>
                    <Image src={mp} alt="mayapaint.studio screen"/>
                </div>
            </div>
        </div>
    );
}
