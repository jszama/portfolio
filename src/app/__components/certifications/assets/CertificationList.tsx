import type { StaticImageData } from "next/image";
import CertificateCard from "./CertificateCard";
import DeansListCertificate from "./deans_list.png";
import JPMorganCertificate from "./jpmorgan.png";
import PostmanCertificate from "./postman.jpg";
import WalmartCertificate from "./walmart.png";

interface Certificate {
	image: StaticImageData;
	title: string;
	description: string;
	link: string;
}

const Certificates: Certificate[] = [
	{
		image: PostmanCertificate,
		title: "Postman API Fundamentals",
		description:
			"Hands on experience with Postman for API testing, using various features such as collections, environments, and automated testing.",
		link: "https://badgr.com/public/assertions/RIkRoQHHTFKVH0Gv6-jGVw?identity__email=jmszamotulski@gmail.com",
	},
	{
		image: JPMorganCertificate,
		title: "JPMC SWE Job Simulation",
		description:
			"Real-world online job simulation for a software engineer role at JPMC, I had worked with stock data which I displayed on a live dashboard, and tested API endpoints.",
		link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/Wb4yEmHvZrC2qxiyX_JPMorgan%20Chase%20&%20Co._vfSEzSR5dC6M59gWu_1718719370399_completion_certificate.pdf",
	},
	{
		image: WalmartCertificate,
		title: "Walmart SWE Job Simulation",
		description:
			"Completed a real-world job simulation for a software engineer role at Walmart, focusing on handling and altering data.",
		link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_vfSEzSR5dC6M59gWu_1738005820984_completion_certificate.pdf",
	},
	{
		image: DeansListCertificate,
		title: "Dean's List - University of Strathclyde",
		description:
			"Recognised for academic excellence by being placed on the Dean's List for a consecutive 2 years, averaging a grade of >= 80%.",
		link: "./Jakub_Szamotulski_Deans_List.pdf",
	},
];

export function CertificationList() {
	return (
		<section className="flex flex-row overflow-x-auto gap-4 py-4 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[var(--hover-magenta)] scrollbar-track-[var(--muted-background)]">
			{Certificates.map((cert, index) => (
				<CertificateCard
					key={index}
					image={cert.image}
					title={cert.title}
					description={cert.description}
					link={cert.link}
				/>
			))}
		</section>
	);
}
