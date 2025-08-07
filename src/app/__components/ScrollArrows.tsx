import { ChevronLeft, ChevronRight } from "lucide-react";
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
				<ChevronLeft size={32} />
			</button>
			<button
				className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 bg-black/50 flex items-center justify-center rounded-full"
				onClick={scrollRight}
			>
				<ChevronRight size={32} />
			</button>
		</div>
	);
}
