import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { type ReactNode } from "react";
import { testimonials } from "./assets";
import { TestimonialCard } from "./assets/TestimonialCard";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="flex flex-col px-4 py-6 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0"
		>
			<h2 className="text-3xl text-[var(--primary-text)] font-bold">Testimonials</h2>
			<h3 className="text-md text-[var(--secondary-text)] mb-4">What people are saying...</h3>
			<div className="flex flex-row gap-x-4 overflow-auto">
				<TestimonialCarousel>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard testimonial={testimonial} key={index} />
					))}
				</TestimonialCarousel>
			</div>
		</section>
	);
}

const TestimonialCarousel: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [emblaRef] = useEmblaCarousel({ loop: true } as EmblaOptionsType, [
		Autoplay({
			delay: 4000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		}) as EmblaPluginType,
	]);

	return (
		<section
			className="w-full"
			style={
				{
					"--slide-height": "0rem",
					"--slide-spacing": "2rem",
					"--slide-size": "100%",
				} as React.CSSProperties
			}
		>
			<div className="overflow-hidden h-auto p-1" ref={emblaRef}>
				<div className="techstack-embla__container flex touch-pinch-zoom touch-pan-y gap-x-4 px-4">
					{children}
				</div>
			</div>
		</section>
	);
};
