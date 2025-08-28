import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import {
	ElectronIcon,
	JavaIcon,
	JavascriptIcon,
	MongoDBIcon,
	NextJsIcon,
	PythonIcon,
	SpringBootIcon,
	SupabaseIcon,
	TypescriptIcon,
} from "../../TechStackIcons";
import euthymia_design_system from "./euthymia/euthymia_design_system.png";
import euthymia_thumbnail from "./euthymia/euthymia_thumbnail.png";
import euthymia_ui_design from "./euthymia/euthymia_ui_design.png";
import gesturebind_thumbnail from "./gesturebind/gesturebind_thumbnail.webp";
import gesturebind_ui_design from "./gesturebind/gesturebind_ui_design.png";
import musclememory_design_system from "./musclememory/modal-content-images/musclememory_design_system.png";
import musclememory_ui_design from "./musclememory/modal-content-images/musclememory_ui_design.png";
import musclememory_thumbnail from "./musclememory/musclememory_thumbnail.webp";

import { type ProjectType, type ProjectsType } from "./ProjectTypes";

interface ProjectLinkButtonProps {
	href: string;
	variant: "purple" | "gray";
	children: ReactNode;
}

export function ProjectLinkButton({ href, variant, children }: ProjectLinkButtonProps) {
	const baseClasses =
		"transition-all duration-200 hover:scale-105 text-white font-bold py-1 px-2 rounded flex items-center gap-2 text-sm";
	const variantClasses =
		variant === "purple"
			? "bg-[var(--primary-magenta)] hover:bg-[var(--hover-magenta)]"
			: "bg-gray-400 hover:bg-gray-500";

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`${baseClasses} ${variantClasses}`}
		>
			{children}
		</a>
	);
}

export function ModalContentLayout({
	children,
	title,
	description,
	date,
	image,
	techStack,
	github,
	website,
}: {
	children: ReactNode;
	title: string;
	description: string;
	date: string;
	image: StaticImageData;
	techStack?: string[];
	github?: string;
	website?: string;
}) {
	return (
		<div className="p-4">
			<div className="flex flex-col gap-4 sm:flex-row justify-between pb-4 border-b-[1px] border-gray-500">
				<div className="flex flex-col">
					<h2 className="text-3xl font-bold">{title}</h2>
					<p className="">{description}</p>
					<p className="text-sm text-gray-500">{date}</p>
					{techStack && (
						<div className="flex flex-row gap-x-2 my-2">
							{techStack.map((tech, index) => (
								<Image
									key={index}
									src={tech}
									alt={`Technology icon ${index + 1}`}
									width={20}
									height={20}
									quality={80}
									loading="lazy"
									decoding="async"
								/>
							))}
						</div>
					)}
					<div className="flex flex-row gap-x-2 mt-auto">
						{website && (
							<ProjectLinkButton href={website} variant="purple">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="12" cy="12" r="10" />
									<line x1="2" y1="12" x2="22" y2="12" />
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
								</svg>
								Website
							</ProjectLinkButton>
						)}
						{github && (
							<ProjectLinkButton href={github} variant="gray">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.646.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.938.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
								</svg>
								GitHub
							</ProjectLinkButton>
						)}
					</div>
				</div>
				<Image
					src={image}
					alt={`${title} project screenshot`}
					placeholder="blur"
					className="rounded-md"
					width={512}
					height={512}
					quality={90}
					loading="lazy"
					decoding="async"
					sizes="(max-width: 640px) 100vw, 512px"
				/>
			</div>
			<section className="text-justify">{children}</section>
		</div>
	);
}

ModalContentLayout.Text = function Text({ children }: { children: ReactNode }) {
	return (
		<p className="mt-4 text-[var(--primary-text)] leading-relaxed text-justify">{children}</p>
	);
};

ModalContentLayout.Heading = function Heading({ children }: { children: ReactNode }) {
	return <h3 className="mt-6 text-xl font-semibold text-[var(--heading-text)]">{children}</h3>;
};

ModalContentLayout.List = function List({ children }: { children: ReactNode }) {
	return <ul className="list-disc pl-6 mt-2 space-y-1 text-[var(--primary-text)]">{children}</ul>;
};

ModalContentLayout.ListItem = function ListItem({ children }: { children: ReactNode }) {
	return <li className="leading-relaxed">{children}</li>;
};

ModalContentLayout.ImageSection = function ImageSection({ children }: { children: ReactNode }) {
	return (
		<section className="flex flex-col w-full sm:flex-row flex-wrap px-8 py-4 gap-4">
			{children}
		</section>
	);
};

const Euthymia: ProjectType = {
	name: "Euthymia [WIP]",
	shortDescription: "Mental health tracking application",
	image: euthymia_thumbnail,
	techStack: [NextJsIcon, TypescriptIcon, JavaIcon, SpringBootIcon, SupabaseIcon],
};

const MuscleMemory: ProjectType = {
	name: "MuscleMemory",
	shortDescription: "Workout tracking application",
	image: musclememory_thumbnail,
	techStack: [NextJsIcon, TypescriptIcon, MongoDBIcon],
	github: "https://github.com/jszama/musclememory",
	website: "https://musclememory-theta.vercel.app/",
};

const GestureBind: ProjectType = {
	name: "Gesture Bind",
	shortDescription: "Gesture recognition application",
	image: gesturebind_thumbnail,
	techStack: [ElectronIcon, PythonIcon],
	github: "https://github.com/jszama/gesturebind",
};

const Promptly: ProjectType = {
	name: "Promptly",
	shortDescription: "AI powered prompt generator",
	image: musclememory_thumbnail,
	techStack: [JavascriptIcon],
	github: "https://github.com/jszama/gemini-assistant-extension",
};

const ModalContent = {
	Euthymia: (
		<ModalContentLayout
			title={Euthymia.name}
			description={Euthymia.shortDescription}
			date="July 2025 - Ongoing"
			image={Euthymia.image}
			techStack={Euthymia.techStack}
		>
			<ModalContentLayout.Text>
				Euthymia is a mental health tracking application that allows users to monitor their
				mood, activities, and overall well-being. The app provides insights and
				recommendations based on user input, helping individuals make informed decisions
				about their mental health.
			</ModalContentLayout.Text>
			<ModalContentLayout.Heading>Planning</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				Planning for Euthymia began with competitor analysis, focusing on existing mental
				health apps to identify strengths and weaknesses. This research informed the feature
				set and user experience/interface design.
			</ModalContentLayout.Text>
			<ModalContentLayout.Heading>Design</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				The design phase involved creating a design system and prototypes using Figma. The
				goal was to develop a user-friendly interface that encourages regular engagement and
				provides clear insights into mental health trends.
			</ModalContentLayout.Text>
			<ModalContentLayout.ImageSection>
				<Image
					src={euthymia_design_system}
					alt="Euthymia Design System interface mockup"
					placeholder="blur"
					quality={90}
					loading="lazy"
					decoding="async"
				/>
				<Image
					src={euthymia_ui_design}
					alt="Euthymia UI Design screens"
					placeholder="blur"
					quality={90}
					loading="lazy"
					decoding="async"
				/>
			</ModalContentLayout.ImageSection>
			<ModalContentLayout.Heading>Development</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				The authentication system and pages for the app have been built, currently we are
				working on the main features of the app, including:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>Activity tracking</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>Mood journaling</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>Goal setting and tracking</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Insights and recommendations
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>
		</ModalContentLayout>
	),
	MuscleMemory: (
		<ModalContentLayout
			title={MuscleMemory.name}
			description={MuscleMemory.shortDescription}
			date="March - December 2024"
			image={MuscleMemory.image}
			techStack={MuscleMemory.techStack}
			github={MuscleMemory.github}
			website={MuscleMemory.website}
		>
			<ModalContentLayout.Text>
				MuscleMemory is a full-stack MERN application designed for personalised workout
				planning, real-time tracking, and performance analytics. The platform empowers users
				to structure training programs, log progress, and optimise their routines.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Planning</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				Planning began with a competitor analysis and user research, where I identified gaps
				in existing workout apps. Insights shaped requirements around personalised planning,
				intuitive tracking, and engaging analytics while also reflecting my own fitness
				goals.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Design</ModalContentLayout.Heading>
			<ModalContentLayout.ImageSection>
				<Image
					src={musclememory_design_system}
					alt="MuscleMemory Design System interface mockup"
					placeholder="blur"
					quality={90}
					loading="lazy"
					decoding="async"
				/>
				<Image
					src={musclememory_ui_design}
					alt="MuscleMemory UI Design screens"
					placeholder="blur"
					quality={90}
					loading="lazy"
					decoding="async"
				/>
			</ModalContentLayout.ImageSection>
			<ModalContentLayout.Text>
				Using Figma, I built a modern, high-fidelity design system with clean typography and
				responsive layouts. The focus was on maximising ease of use and ensuring smooth user
				flows, from creating workouts to reviewing performance analytics.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Development</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				Development involved building a scalable MERN stack architecture. Key features
				included workout logging, performance analytics, and progress visualisation. A
				responsive React frontend was paired with an Express.js API and MongoDB for
				efficient data management.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Lessons Learned</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				As my first large-scale project, MuscleMemory significantly deepened my
				understanding of both frontend and backend systems. Key takeaways include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Implementing secure user authentication and authorisation flows
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Practical experience with SSR vs CSR trade-offs
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Gained hands-on knowledge of NoSQL data modelling with MongoDB
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Deploying and managing full-stack apps on cloud platforms
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>
		</ModalContentLayout>
	),
	GestureBind: (
		<ModalContentLayout
			title={GestureBind.name}
			description={GestureBind.shortDescription}
			date="January - March 2025"
			image={GestureBind.image}
			techStack={GestureBind.techStack}
			github={GestureBind.github}
		>
			<ModalContentLayout.Text>
				GestureBind is a cross-platform desktop application that enables device control
				through hand gestures. Built with Electron and Python, it integrates real-time
				computer vision models to deliver accurate, low-latency gesture recognition.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Planning</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				The project was scoped around MediaPipe’s robust hand-tracking model, which provided
				a strong foundation for recognising a variety of gestures. This allowed me to focus
				development efforts on building seamless interaction flows and system integration.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Design</ModalContentLayout.Heading>
			<ModalContentLayout.ImageSection>
				<Image
					src={gesturebind_ui_design}
					alt="GestureBind UI Design interface"
					placeholder="blur"
					quality={90}
					loading="lazy"
					decoding="async"
				/>
			</ModalContentLayout.ImageSection>
			<ModalContentLayout.Text>
				The UI was intentionally minimal and lightweight, prioritising background processing
				and real-time feedback. A small control panel allows users to customise gestures
				while the app runs unobtrusively in the background.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Development</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				GestureBind leverages Electron for the desktop shell and Python for computer vision
				processing. MediaPipe provided gesture tracking, OpenCV supported image
				preprocessing, and a Flask-based REST API enabled communication between frontend and
				backend layers.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Testing</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				I conducted extensive testing across varied lighting conditions, hand sizes, and
				environments. Feedback-driven iterations, combined with a confusion matrix analysis,
				increased recognition accuracy by 7% compared to the initial baseline.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Lessons Learned</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				GestureBind introduced me to the complexities of real-time computer vision and
				highlighted practical engineering challenges. Main lessons include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Advanced understanding of computer vision and image preprocessing
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Importance of iterative improvement and validation in AI models
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Strategies for optimising latency in real-time applications
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Designing lightweight apps to minimise CPU/GPU overhead
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>
		</ModalContentLayout>
	),
	Promptly: (
		<ModalContentLayout
			title={Promptly.name}
			description={Promptly.shortDescription}
			date="January 2025"
			image={Promptly.image}
			techStack={Promptly.techStack}
			github={Promptly.github}
		>
			<ModalContentLayout.Text>
				Promptly is an AI-powered Chrome extension that enables seamless interaction with AI
				models. It allows users to highlight text or capture screenshots from web pages and
				instantly generate contextual AI responses using Gemini.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Planning</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				The planning phase revolved around identifying pain points when interacting with AI
				while browsing. I found that switching contexts between browser and chat apps broke
				workflow efficiency. My main goal was to build a lightweight tool that integrates AI
				into existing browsing habits.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Design</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				The extension design emphasises speed and minimal disruption. I designed a compact
				UI that lets users select text, right-click, or capture a screenshot, and instantly
				open the response in an overlay. This kept the flow intuitive without cluttering the
				browsing experience.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Development</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				Promptly was built using JavaScript and the Chrome Extensions API, with Gemini
				integration for contextual AI responses. I implemented efficient background scripts
				for handling requests and optimised content scripts for seamless interaction between
				webpages and the extension UI.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Lessons Learned</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				This project taught me about building browser extensions and working with AI APIs in
				resource-constrained environments. Key takeaways include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Improved understanding of event-driven architecture in Chrome Extensions
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Importance of lightweight design for tools that run constantly in the background
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Gained experience handling AI requests securely within client-side applications
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>
		</ModalContentLayout>
	),
};

export const ProjectList: ProjectsType = {
	Euthymia: { ...Euthymia, modalContent: ModalContent.Euthymia },
	MuscleMemory: { ...MuscleMemory, modalContent: ModalContent.MuscleMemory },
	GestureBind: { ...GestureBind, modalContent: ModalContent.GestureBind },
	Promptly: { ...Promptly, modalContent: ModalContent.Promptly },
};

export { Euthymia, GestureBind, MuscleMemory, Promptly };
