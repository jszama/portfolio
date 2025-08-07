import { useCallback, useRef } from "react";

export function useThrottle<T extends (...args: any[]) => void>(
	callback: T,
	delay: number = 100
): T {
	const lastRun = useRef<number>(0);

	const throttledCallback = useCallback(
		(...args: Parameters<T>) => {
			const now = Date.now();

			if (now - lastRun.current >= delay) {
				callback(...args);
				lastRun.current = now;
			}
		},
		[callback, delay]
	) as T;

	return throttledCallback;
}
