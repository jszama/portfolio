"use client";

import { useCallback, useState } from "react";
import { useScrollOverflow } from "../hooks";
import { ScrollArrows } from "../ScrollArrows";
import { ExperienceCard } from "./assets/ExperienceCard";
import { Experiences } from "./assets/experiences";
import { useExpandedItem } from "./assets/useExpandedItem";

export default function Experience() {
	const { expandedItem, toggleItem } = useExpandedItem();
	const [showArrows, setShowArrows] = useState(false);
	const { sliderRef, overflowing } = useScrollOverflow();

	const handleMouseEnter = useCallback(() => setShowArrows(true), []);
	const handleMouseLeave = useCallback(() => setShowArrows(false), []);

	return (
		<section
			className="flex flex-col px-4 py-12 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0 relative"
			id="experience"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h2 className="text-3xl text-[var(--primary-text)] font-bold">Experience</h2>
			<h3 className="text-md text-[var(--secondary-text)] mb-4">
				My professional journey so far...
			</h3>
			<div
				className="flex space-x-6 p-2 overflow-x-scroll snap-x snap-mandatory scrollbar-thumb-[var(--hover-magenta)] scrollbar-track-[var(--secondary-dark-background)] scrollbar-hide overscroll-x-contain"
				ref={sliderRef}
			>
				{Experiences.map((experience) => (
					<ExperienceCard
						key={experience.company}
						{...experience}
						isExpanded={expandedItem === experience.company}
						onToggle={() => toggleItem(experience.company)}
					/>
				))}
			</div>
			{overflowing && showArrows && <ScrollArrows sliderRef={sliderRef} />}
		</section>
	);
}
