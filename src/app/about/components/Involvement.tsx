import Link from "next/link";

export default function Involvement() {
    return (
        <div>
            <h3>Things I'm Involved With ☺&#xFE0E;</h3>
            <ul>
                <li>
                    I'm grateful to be an organizer for
                    <Link href="https://columbiaintech.com" target="_blank" rel="noopener noreferrer"> Columbia in Tech</Link>, a community of Columbia alumni working in technology.
                </li>
                <li>
                    I've interned at three MBA student-run ventures at
                    <Link href="https://columbiabuildlab.com/" target="_blank" rel="noopener noreferrer"> Columbia Build Lab</Link>, an incubator housed at Columbia Business School.
                    I served as undergraduate co-president of the program for nearly two years. I led brand and marketing, recruitment, and served as point-of-contact for all participants. During my time, the program expanded significantly,
                    and I'm really proud of what we accomplished.
                </li>
                <li>
                    During college, I assisted on research at Teachers College, where I learned a lot about cooperative learning and knowledge diversity, and Columbia University
                    Irving Medical Center, where I worked on genome annotation to identify novel structural variants in populations with pediatric hearing loss.
                </li>
            </ul>
        </div>
    );
}