import { motion } from "framer-motion";
import { useMemo } from "react";

type SlideInAnimationProps = {
	duration?: number;
	from?: "left" | "right" | "top" | "bottom";
	delay?: number;
	children: React.ReactNode;
};

export function SlideInAnimation({
	duration = 0.5,
	from = "left",
	delay = 0,
	children,
}: SlideInAnimationProps) {
	const initial = useMemo(
		() => ({
			x: from === "left" ? -150 : from === "right" ? 150 : 0,
			y: from === "top" ? -150 : from === "bottom" ? 150 : 0,
			opacity: 0,
		}),
		[from]
	);

	const transition = useMemo(
		() => ({
			duration,
			delay,
			ease: [0.25, 0.1, 0.25, 1.0],
		}),
		[duration, delay]
	);

	return (
		<motion.div
			initial={initial}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			transition={transition}
			viewport={{ once: true, amount: 0.3 }}
		>
			{children}
		</motion.div>
	);
}
