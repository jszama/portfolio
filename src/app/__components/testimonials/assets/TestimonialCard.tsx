import Image, { type StaticImageData } from "next/image";
import { memo } from "react";

export interface Testimonial {
	name: string;
	role: string;
	company: string;
	testimonial: string;
	image: string | StaticImageData;
	link: string;
}

const TestimonialCard = memo(function TestimonialCard(props: { testimonial: Testimonial }) {
	return (
		<article className="flex flex-row min-w-[90dvw] sm:min-w-[70dvw] min-h-[20dvh] max-h-[20dvh] sm:min-h-[32dvh] sm:max-h-[32dvh] bg-[var(--muted-background)] rounded-sm">
			<div className="flex justify-center items-center p-4 flex-shrink-0">
				<Image
					src={"/jakub.jpg"}
					width={192}
					height={192}
					alt="Profile Image"
					quality={90}
					className="transition-transform duration-200 hover:scale-105 will-change-transform cursor-pointer w-24 h-24 sm:w-48 sm:h-48 rounded-full object-cover"
					// placeholder='blur'
					loading="eager"
					onClick={() => window.open(props.testimonial.link, "_blank")}
				/>
			</div>
			<div className="flex flex-col items-center justify-center w-full px-1 h-full">
				<div className="w-full flex flex-col border-b-2 border-[var(--divider-color)] mb-2 pb-1">
					<p className="pt-1 text-base sm:text-2xl text-[var(--heading-text)] mb-1">
						{props.testimonial.name}
					</p>
					<p className="text-xs sm:text-base text-[var(--secondary-text)] mb-1">
						{props.testimonial.role} at {props.testimonial.company}
					</p>
				</div>
				<p className="text-[0.625rem] sm:text-lg text-[var(--primary-text)] mb-1 w-[90%]">
					&quot;{props.testimonial.testimonial}&quot;
				</p>
			</div>
		</article>
	);
});

export { TestimonialCard };
