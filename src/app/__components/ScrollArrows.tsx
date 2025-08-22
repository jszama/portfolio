import { type RefObject } from "react";
import { useThrottle } from "./hooks";

export function ScrollArrows({ sliderRef }: { sliderRef: RefObject<HTMLDivElement | null> }) {
	const scrollLeft = useThrottle(() => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -sliderRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	}, 300); // 300ms throttle to prevent rapid scrolling

	const scrollRight = useThrottle(() => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
		}
	}, 300); // 300ms throttle to prevent rapid scrolling

	return (
		<div className="z-10 flex justify-between transition-all duration-200">
			<button
				className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-5 bg-black/50 flex items-center justify-center rounded-full"
				onClick={scrollLeft}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m15 18-6-6 6-6" />
				</svg>
			</button>
			<button
				className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 bg-black/50 flex items-center justify-center rounded-full"
				onClick={scrollRight}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>
		</div>
	);
}
