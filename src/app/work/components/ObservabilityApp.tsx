import os from "../../../../public/observability.jpeg";
import Image from "next/image";


export default function StudentStay() {
    return (
        <div>
            <div className="tbox">
                <div>Student Stay ·
                    <div className="tool">React</div>
                    <div className="tool">Firebase</div>
                    <div className="tool">Flask</div>
                </div>
                <p>I built a simple web app that displayed some posts, integrating it with application
                    performance monitoring tools.</p>
                <p>I architected infrastructure tooling to configure Elasticsearch and Kibana dashboards,
                    log shipping with Filebeat, and tools like Grafana and Prometheus.
                </p>
                <Image src={os} alt="observability screen"/>
            </div>
        </div>
    );
}
