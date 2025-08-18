import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import {
	ElectronIcon,
	JavascriptIcon,
	MongoDBIcon,
	NextJsIcon,
	PythonIcon,
	ReactIcon,
	TypescriptIcon,
} from "../../TechStackIcons";
import gesturebind_thumbnail from "./gesturebind_thumbnail.webp";
import musclememory_thumbnail from "./musclememory_thumbnail.webp";
import { type ProjectType, type ProjectsType } from "./ProjectTypes";

export function ModalContentLayout({
	children,
	title,
	description,
	date,
	image,
	techStack,
}: {
	children: ReactNode;
	title: string;
	description: string;
	date: string;
	image: StaticImageData;
	techStack?: string[];
}) {
	return (
		<div className="p-4">
			<div className="flex flex-col gap-4 sm:flex-row justify-between">
				<div className="flex flex-col">
					<h2 className="text-3xl font-bold">{title}</h2>
					<p className="">{description}</p>
					<p className="text-sm text-gray-500">{date}</p>
					{techStack && (
						<div className="flex flex-row gap-x-2 mt-2">
							{techStack.map((tech, index) => (
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
				</div>
				<div>
					<Image
						src={image.src}
						alt={title}
						className="rounded-md"
						width={512}
						height={512}
					/>
				</div>
			</div>
			{children}
		</div>
	);
}

const MuscleMemory: ProjectType = {
	name: "MuscleMemory",
	shortDescription: "Workout tracking application",
	image: musclememory_thumbnail,
	techStack: [NextJsIcon, ReactIcon, TypescriptIcon, MongoDBIcon],
};

const GestureBind: ProjectType = {
	name: "Gesture Bind",
	shortDescription: "Gesture recognition application",
	image: gesturebind_thumbnail,
	techStack: [ElectronIcon, PythonIcon],
};

const Promptly: ProjectType = {
	name: "Promptly",
	shortDescription: "AI powered prompt generator",
	image: musclememory_thumbnail,
	techStack: [JavascriptIcon],
};

const ModalContent = {
	MuscleMemory: (
		<ModalContentLayout
			title={MuscleMemory.name}
			description={MuscleMemory.shortDescription}
			date="2024"
			image={MuscleMemory.image as StaticImageData}
			techStack={MuscleMemory.techStack}
		>
			<p className="mt-2">
				MuscleMemory is a workout tracking application built with Next.js, React, and
				TypeScript. It allows users to log their workouts, track progress, and manage their
				fitness routines.
			</p>
		</ModalContentLayout>
	),
	GestureBind: (
		<ModalContentLayout
			title={GestureBind.name}
			description={GestureBind.shortDescription}
			date="2025"
			image={GestureBind.image as StaticImageData}
			techStack={GestureBind.techStack}
		>
			<p className="mt-2">
				GestureBind is a gesture recognition application built with Electron and Python. It
				allows users to control their devices using hand gestures.
			</p>
		</ModalContentLayout>
	),
	Promptly: (
		<ModalContentLayout
			title={Promptly.name}
			description={Promptly.shortDescription}
			date="2025"
			image={Promptly.image as StaticImageData}
			techStack={Promptly.techStack}
		>
			<p className="mt-2">
				Promptly is an AI-powered prompt generator that helps users create engaging content.
				It uses advanced natural language processing techniques to generate prompts based on
				user input.
			</p>
		</ModalContentLayout>
	),
};

export const ProjectList: ProjectsType = {
	MuscleMemory: { ...MuscleMemory, modalContent: ModalContent.MuscleMemory },
	GestureBind: { ...GestureBind, modalContent: ModalContent.GestureBind },
	Promptly: { ...Promptly, modalContent: ModalContent.Promptly },
};

export { GestureBind, MuscleMemory, Promptly };
