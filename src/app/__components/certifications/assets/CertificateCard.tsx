import Image from "next/image";
import { Tooltip } from "react-tooltip";

export interface CertificateCardProps {
	image: string;
	title: string;
	description: string;
	link: string;
}

export default function CertificateCard({ image, title, description, link }: CertificateCardProps) {
	return (
		<article>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
				data-tooltip-id="certificate-tooltip"
				data-tooltip-content={description}
				data-tooltip-place="top"
				data-tooltip-className="bg-[var(--secondary-dark-background)] text-[var(--primary-text)] p-2 rounded-lg shadow-lg"
			>
				<Image
					src={image}
					alt={title}
					width={300}
					height={200}
					className="w-full h-auto rounded-lg shadow-lg mb-4"
				/>
			</a>
			<Tooltip id="certificate-tooltip" />
		</article>
	);
}
