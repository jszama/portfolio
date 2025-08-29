"use client";
import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { type CSSProperties, type FC } from "react";

import {
	JavaIcon,
	JavaScriptIcon,
	MongoDBIcon,
	NextJSIcon,
	PythonIcon,
	ReactIcon,
	TypeScriptIcon,
} from "../../TechStackIcons";

const slides = [
	{ icon: MongoDBIcon, tooltip: "MongoDB - 1 year of experience" },
	{ icon: NextJSIcon, tooltip: "NextJS - 2 years of experience" },
	{ icon: ReactIcon, tooltip: "React - 2 years of experience" },
	{ icon: TypeScriptIcon, tooltip: "Typescript - 2 years of experience" },
	{ icon: JavaIcon, tooltip: "Java - 1 year of experience" },
	{ icon: PythonIcon, tooltip: "Python - 2 years of experience" },
	{ icon: JavaScriptIcon, tooltip: "Javascript - 2 years of experience" },
];

type PropType = {
	options?: EmblaOptionsType;
	size: number;
};

const TechStackCarousel: FC<PropType> = (props) => {
	const { options, size } = props;
	const [emblaRef] = useEmblaCarousel(options, [
		Autoplay({
			delay: 1000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		}) as EmblaPluginType,
	]);

	return (
		<section
			className="rounded-sm max-w-[8rem]"
			style={
				{
					"--slide-height": "2rem",
					"--slide-spacing": "1rem",
					"--slide-size": "25%",
				} as CSSProperties
			}
		>
			<div className="overflow-hidden h-auto p-1" ref={emblaRef}>
				<div className="techstack-embla__container flex touch-pinch-zoom touch-pan-y ml-[var(--slide-spacing) * -1]">
					{slides.map((value) => (
						<div
							className="ml-[var(--slide-spacing)] min-w-0"
							key={value.icon.url}
							style={{
								transform: "translate3d(0, 0, 0)",
								flex: "0 0 var(--slide-size)",
							}}
						>
							<div className="rounded-[1.8rem] flex items-center justify-center select-none h-[var(--slide-height)] group relative">
								<Image
									title={value.tooltip}
									src={value.icon.url}
									width={size}
									height={size}
									alt="Programming Language Icon"
									quality={90}
									loading="lazy"
									decoding="async"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { TechStackCarousel };
