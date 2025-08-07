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
					className="w-[80vw] sm:w-96 h-48 overflow-hidden rounded-lg hover:drop-shadow-[0_0_6px_var(--primary-dark-background)] transition-all duration-200 cursor-pointer will-change-transform"
				>
					<Image
						src={props.project.image}
						width={384}
						height={384}
						alt="Project Image"
						quality={85}
						className="w-full h-full z-0 transition-all duration-200 hover:scale-110 will-change-transform"
						placeholder="blur"
						loading="eager"
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
									src={tech}
									alt={tech}
									width={20}
									height={20}
									quality={80}
									loading="lazy"
								/>
							))}
						</div>
					)}
				</span>
			</article>
			<Modal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				className="bg-[var(--primary-dark-background)] w-full h-full"
			>
				{props.project.modalContent}
			</Modal>
		</>
	);
});

export { ProjectCard };
