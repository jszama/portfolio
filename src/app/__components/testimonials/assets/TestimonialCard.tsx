import Image, { StaticImageData } from "next/image";

export interface Testimonial {
	name: string;
	role: string;
	company: string;
	testimonial: string;
	image: string | StaticImageData;
	link: string;
}

export default function TestimonialCard(props: { testimonial: Testimonial }) {
	return (
		<article className="flex flex-row min-w-[70dvw] min-h-[20dvh] max-h-[20dvh] sm:min-h-[32dvh] sm:max-h-[32dvh] bg-[var(--muted-background)]">
			<div className="flex justify-center items-center max-w-32 sm:max-w-64 p-4">
				<Image
					src={"/jakub.jpg"}
					width={128}
					height={128}
					alt="Project Image"
					quality={50}
					className="transition-all duration-200 hover:scale-105 will-change-transform cursor-pointer w-auto h-full rounded-full aspect-square"
					// placeholder='blur'
					loading="eager"
					onClick={() => window.open(props.testimonial.link, "_blank")}
				/>
			</div>
			<div className="flex flex-col items-center justify-center w-full px-1 h-full">
				<div className="min-h-[30%] max-h-[30%] w-full flex flex-col border-b-2 border-[var(--divider-color)] mb-2 pb-1">
					<p className="pt-1 text-base sm:text-2xl text-[var(--heading-text)] mb-1">
						{props.testimonial.name}
					</p>
					<p className="text-xs sm:text-base text-[var(--secondary-text)] mb-1">
						{props.testimonial.role} at {props.testimonial.company}
					</p>
				</div>
				<p className="text-sm sm:text-lg text-[var(--primary-text)] mb-1 w-full">
					&quot;{props.testimonial.testimonial}&quot;
				</p>
			</div>
		</article>
	);
}
