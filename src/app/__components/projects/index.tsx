"use client";
import { useCallback, useState } from "react";
import { useScrollOverflow } from "../hooks";
import { ScrollArrows } from "../ScrollArrows";
import { ProjectCard } from "./assets/ProjectCard";
import { ProjectList } from "./assets/ProjectData";

export default function Projects() {
	const [showArrows, setShowArrows] = useState(false);
	const { sliderRef, overflowing } = useScrollOverflow();

	const handleMouseEnter = useCallback(() => setShowArrows(true), []);
	const handleMouseLeave = useCallback(() => setShowArrows(false), []);

	return (
		<section
			id="projects"
			className="flex flex-col px-4 py-12 sm:mt-24 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0 relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h2 className="z-10 text-3xl text-[var(--primary-text)] font-bold">
				Personal Projects
			</h2>
			<h3 className="z-10 text-md text-[var(--secondary-text)] mb-4">
				A showcase of my work...
			</h3>
			<div
				className="z-10 w-full h-full flex space-x-1 overflow-x-scroll snap-x snap-mandatory scrollbar-hide overscroll-x-contain"
				ref={sliderRef}
			>
				{Object.keys(ProjectList).map((projectKey) => (
					<ProjectCard key={projectKey} project={ProjectList[projectKey]} />
				))}
			</div>
			{overflowing && showArrows && <ScrollArrows sliderRef={sliderRef} />}
			<div className="w-full h-full rounded-full bg-radial from-[var(--hover-magenta)] to-transparent blur-3xl opacity-50 absolute z-0" />
		</section>
	);
}
