import { useRef, useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export function useScrollOverflow(delay: number = 150) {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [overflowing, setOverflowing] = useState(false);

	const checkOverflow = () => {
		if (sliderRef.current) {
			setOverflowing(sliderRef.current.scrollWidth > sliderRef.current.clientWidth);
		}
	};

	// Debounce the overflow check for resize events
	const debouncedCheckOverflow = useDebounce(checkOverflow, delay);

	useEffect(() => {
		// Initial check without debounce
		checkOverflow();

		// Add debounced resize listener
		window.addEventListener("resize", debouncedCheckOverflow, { passive: true });

		return () => {
			window.removeEventListener("resize", debouncedCheckOverflow);
		};
	}, [debouncedCheckOverflow]);

	return {
		sliderRef,
		overflowing,
		checkOverflow: debouncedCheckOverflow,
	};
}
