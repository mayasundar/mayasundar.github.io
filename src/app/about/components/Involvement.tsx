import Link from "next/link";

export default function Involvement() {
    return (
        <div>
            <h3>Involvement ☺&#xFE0E;</h3>
            <ul>
                <li>
                    I'm an organizer with
                    <Link href="https://columbiaintech.com" target="_blank" rel="noopener noreferrer"> Columbia in Tech</Link>
                    , a community of Columbia alumni working in technology. I work on our brand & digital strategy.
                    We send a monthly newsletter with updates on our own initiatives & community contributions. 🦁
                </li>
                <li>
                    In college, I helped build and grow
                    <Link href="https://columbiabuildlab.com/" target="_blank" rel="noopener noreferrer"> Columbia Build Lab</Link>, an incubator housed at Columbia Business School.


                    {/*I served as undergraduate co-president of the program for nearly two years.*/}
                    {/*I led brand and marketing, recruitment, and served as point-of-contact for all participants. During my time, the program expanded significantly,*/}
                    {/*and I'm really proud of what we accomplished.*/}
                </li>
                {/*<li>*/}
                {/*    During college, I assisted on research at Teachers College, where I learned a lot about cooperative learning and knowledge diversity, and Columbia University*/}
                {/*    Irving Medical Center, where I worked on genome annotation to identify novel structural variants in populations with pediatric hearing loss.*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}