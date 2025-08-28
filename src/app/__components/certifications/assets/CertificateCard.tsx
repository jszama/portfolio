import Image, { type StaticImageData } from "next/image";
import { Tooltip } from "react-tooltip";

export interface CertificateCardProps {
	image: StaticImageData;
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
				data-tooltip-place="bottom"
			>
				<div className="relative mb-4">
					<Image
						src={image}
						alt={title}
						width={300}
						height={200}
						placeholder="blur"
						className="w-full h-auto max-h-[300px] transition-all duration-300 transform translate-y-[-8px] hover:translate-y-[-12px] relative z-10"
					/>
					{/* Circular shadow underneath */}
					<div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 w-full h-5 bg-black/80 rounded-full blur-sm transition-all duration-300" />
				</div>
				<h3 className="text-center text-[var(--primary-text)]">{title}</h3>
				<Tooltip
					id="certificate-tooltip"
					className="!bg-[var(--muted-background)] max-w-[18rem] !text-white p-3 rounded-lg !shadow-xl border border-[var(--hover-magenta)] !opacity-100 z-50"
					style={{
						backgroundColor: "var(--muted-background) !important",
						opacity: "1 !important",
					}}
				/>
			</a>
		</article>
	);
}
