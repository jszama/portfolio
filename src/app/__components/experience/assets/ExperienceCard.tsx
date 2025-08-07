"use client";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { memo, useCallback, useState } from "react";
import { Modal } from "../../Modal";
import { type Experience } from "./experiences";

const ExperienceCard = memo(function ExperienceCard({
	company,
	company_icon,
	position,
	duration,
	description,
	techStack,
	readMore,
	modalContent,
	isExpanded,
	onToggle,
}: Experience & { isExpanded: boolean; onToggle: () => void }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<>
			<article
				id={company}
				className="flex flex-col snap-start items-center gap-y-1 sm:gap-y-2"
			>
				<div
					className={`bg-[var(--muted-background)] rounded-lg hover:scale-[1.01] hover:drop-shadow-[0_0_4px_var(--hover-magenta)] flex items-start font-bold  mb-2 sm:max-h-80 max-h-64 h-80 relative overflow-hidden transition-all duration-500 ease-out will-change-transform ${isExpanded ? "w-[90vw] sm:w-[36rem]" : "w-[11rem] sm:w-[14rem]"}`}
					style={{
						transform: "translateZ(0)",
					}}
				>
					{/* Unexpanded View */}
					<div
						className="flex flex-col py-3 px-4 shrink-0 cursor-pointer"
						onClick={onToggle}
					>
						<div className="sm:mb-4 mb-2 sm:justify-center sm:flex sm:h-48 sm:w-48 h-36 w-36 rounded-full overflow-hidden border-2 border-[var(--primary-magenta)]">
							<Image
								src={company_icon}
								alt={`${company} logo`}
								width={96}
								height={96}
								className="h-full w-full object-cover"
								quality={90}
								loading="eager"
								placeholder="blur"
							/>
						</div>
						<h4 className="text-lg text-[var(--primary-text)]">{company}</h4>
						<h5 className="text-sm text-[var(--secondary-text)]">{position}</h5>
						<div className="flex flex-row gap-2 mt-2 flex-wrap">
							{techStack?.length ? (
								techStack.map((tech, index) => (
									<Image
										key={index}
										src={tech}
										alt={tech}
										width={24}
										height={24}
										className="h-6 w-6 object-contain"
										loading="lazy"
										decoding="async"
									/>
								))
							) : (
								<span className="h-6 w-6 flex items-center justify-center text-xs text-[var(--secondary-text)] font-semibold">
									N/A
								</span>
							)}
						</div>
					</div>

					{/* Description content (expands to right) */}
					{isExpanded && (
						<div className="border-l-3 border-[var(--secondary-dark-background)] h-full w-full overflow-hidden px-3 text-[0.625rem] sm:text-sm text-[var(--primary-text)] pt-2 text-start font-normal relative">
							<h4 className="hidden sm:block">{description.title}</h4>
							<ul className="list-disc pl-1 sm:pl-5 sm:pt-2 space-y-1">
								{description.description.map((desc, index) => (
									<li key={index} className="text-[var(--secondary-text)]">
										{desc}
									</li>
								))}
							</ul>
							{readMore && (
								<Button
									className="absolute cursor-pointer bottom-2 right-2 text-[var(--primary-text)] font-bold hover:text-[var(--hover-magenta)] transition-all duration-300 ease-in-out"
									onClick={() => toggleModal()}
								>
									Read more
								</Button>
							)}
						</div>
					)}
				</div>
				<p className="text-sm text-[var(--secondary-text)]">{duration}</p>
			</article>

			{/* Modal for expanded content */}
			{modalContent && (
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					className="bg-[var(--primary-dark-background)] w-full h-full"
				>
					{modalContent}
				</Modal>
			)}
		</>
	);
});

export { ExperienceCard };
