"use client";
import Image from "next/image";
import { memo, useCallback, useState } from "react";
import { Modal } from "../../Modal";
import { type ProjectType } from "./ProjectTypes";

type PropType = {
	project: ProjectType;
};

const ProjectCard = memo(function ProjectCard(props: PropType) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<>
			<article className="pt-2 px-2">
				<div
					onClick={toggleModal}
					className="w-[80vw] sm:w-96 aspect-video overflow-hidden rounded-lg hover:drop-shadow-[0_0_4px_var(--primary-magenta)] transition-[shadow] duration-200 cursor-pointer will-change-transform"
				>
					<Image
						src={props.project.image}
						width={384}
						height={216}
						alt="Project Image"
						quality={85}
						className="object-cover w-full h-full z-0 transition-[scale] duration-200 hover:scale-110 will-change-transform ease-out"
						placeholder="blur"
						loading="eager"
						decoding="async"
					/>
				</div>
				<span className="flex flex-col justify-between items-start w-full px-1">
					<p className="pt-1 text-lg text-[var(--heading-text)] mb-1">
						{props.project.name}{" "}
						<span className="text-xs text-gray-400">
							- {props.project.shortDescription}
						</span>
					</p>
					{props.project.techStack && (
						<div className="flex flex-row gap-x-2">
							{props.project.techStack.map((tech, index) => (
								<Image
									key={index}
									src={tech.url}
									alt={`${tech.title} icon`}
									width={20}
									height={20}
									quality={80}
									loading="lazy"
									title={tech.title}
								/>
							))}
						</div>
					)}
				</span>
			</article>
			<Modal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				className="bg-[var(--primary-dark-background)] w-full h-full overflow-y-auto"
			>
				{props.project.modalContent}
			</Modal>
		</>
	);
});

export { ProjectCard };
