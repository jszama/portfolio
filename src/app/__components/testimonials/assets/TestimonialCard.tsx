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
		<article className="flex flex-row min-w-[90dvw] sm:min-w-[80dvw] min-h-[20dvh] sm:min-h-[32dvh] bg-[var(--muted-background)] rounded-sm p-2">
			<div className="flex justify-center items-center p-2 sm:p-4 flex-shrink-0">
				<Image
					src={props.testimonial.image}
					width={192}
					height={192}
					alt={`${props.testimonial.name}'s LinkedIn Profile Image`}
					quality={90}
					className="transition-transform duration-200 hover:scale-105 will-change-transform cursor-pointer w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover"
					// placeholder='blur'
					loading="eager"
					onClick={() => window.open(props.testimonial.link, "_blank")}
				/>
			</div>
			<div className="flex flex-col justify-center w-full px-1 h-full">
				<div className="w-full flex flex-col border-b-2 border-[var(--divider-color)] mb-2 pb-1">
					<div className="flex flex-row items-center gap-x-1 sm:gap-x-2">
						<p className="text-xs sm:text-base md:text-2xl text-[var(--heading-text)]">
							{props.testimonial.name}
						</p>
						<a
							href={props.testimonial.link}
							target="_blank"
							rel="noopener noreferrer"
							className="cursor-pointer transition-transform duration-200 flex items-center hover:text-[#0083c9] pt-1"
							aria-label={`Go to ${props.testimonial.name}'s profile`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z" />
							</svg>
						</a>
					</div>
					<p className="text-[0.625rem] sm:text-sm md:text-base text-[var(--secondary-text)] mb-1">
						{props.testimonial.role} @ {props.testimonial.company}
					</p>
				</div>
				<p className="text-[0.625rem] sm:text-sm md:text-lg text-[var(--primary-text)] mb-1 w-[95%] text-justify overflow-ellipsis">
					<em>&quot;{props.testimonial.testimonial}&quot;</em>
				</p>
			</div>
		</article>
	);
});

export { TestimonialCard };
