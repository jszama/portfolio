import { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { NextJsIcon, PythonIcon, ReactIcon, TypescriptIcon } from "../../TechStackIcons";
import { OutlierLogo, Poland20Logo, PropecoLogo, Subsea7Logo } from "./index";

export type Description = {
	title: string;
	description: string[];
};

export type Experience = {
	company: string;
	company_icon: StaticImageData;
	position: string;
	duration: string;
	description: Description;
	techStack?: string[];
	readMore?: boolean;
	modalContent?: ReactNode;
};

const ModalContent = {
	PropEco: (
		<div>
			<h2>PropEco</h2>
			<p>
				My first experience in a professional environment, where I learned about GIS and
				data management.
			</p>
			<p>Worked with ArcGIS to manage and analyse geospatial data.</p>
			<p>
				Automated data handling workflows with Python scripts, improving productivity by
				40%.
			</p>
		</div>
	),
	Poland20: (
		<div>
			<h2>Poland 2.0</h2>
			<p>
				My first software engineering role, I am in charge of maintaining and improving the
				company website.
			</p>
			<p>Worked with ArcGIS to manage and analyse geospatial data.</p>
			<p>
				Automated data handling workflows with Python scripts, improving productivity by
				40%.
			</p>
		</div>
	),
};

export const Experiences = [
	{
		company: "PropEco",
		company_icon: PropecoLogo,
		position: "Fullstack Engineer",
		duration: "Apr 2025 - Present",
		description: {
			title: "My first professional Software Engineering position, at a start-up.",
			description: [
				"Deployed a self-hosted Large Language Model (LLM) on AWS, reducing third-party API costs by ~50% and improving data privacy and control.",
				"Built a report ordering and auto PDF generation system using Stripe, Puppeteer, and API key authentication, enabling seamless paid data access.",
				"Developed embeddable widgets for client websites to display live company API data, enhancing customer engagement and platform integration.",
			],
		},
		techStack: [ReactIcon, TypescriptIcon, PythonIcon],
		readMore: true,
		modalContent: ModalContent.PropEco,
	},
	{
		company: "Poland 2.0",
		company_icon: Poland20Logo,
		position: "Frontend Engineer",
		duration: "Jan 2025 - Present",
		description: {
			title: "My first Software Engineering role, I am in charge of maintaining and improving the company website.",
			description: [
				"Integrated internationalisation (i18n) support using Lingui, enabling bilingual functionality in English and Polish.",
				"Designed and developed a dynamic blog system with markdown support, allowing the marketing team to publish and manage content independently.",
				"Optimised performance by implementing lazy loading and next-gen image formats (WebP), reducing image load times by ~45% and improving Lighthouse score by 5+ points.",
			],
		},
		techStack: [NextJsIcon, ReactIcon, TypescriptIcon],
		readMore: true,
		modalContent: ModalContent.Poland20,
	},
	{
		company: "Outlier",
		company_icon: OutlierLogo,
		position: "AI Content Reviewer",
		duration: "Nov 2024 - Present",
		description: {
			title: "Freelancing remote job, in charge of reviewing AI-generated content.",
			description: [
				"Reviewed and provided feedback on AI-generated content for accuracy and relevance.",
				"Greatly improved my attention to detail and understanding of AI content generation.",
				"Developed precise prompt engineering skills to enhance AI output quality.",
			],
		},
	},
	{
		company: "Subsea7",
		company_icon: Subsea7Logo,
		position: "GIS Technician Intern",
		duration: "Nov 2022 - Mar 2023",
		description: {
			title: "My first experience in a professional environment, where I learned about GIS and data management.",
			description: [
				"Worked with ArcGIS to manage and analyse geospatial data.",
				"Automated data handling workflows with Python scripts, improving productivity by 40%.",
				"Processed and managed vessel route data using Excel, enhancing data accuracy and accessibility.",
				"Collaborated with a team of engineers and geologists to support offshore projects.",
				"Quickly adapted to new technologies, demonstrating effective problem-solving in a high-paced setting.",
			],
		},
		techStack: [PythonIcon],
	},
] as Experience[];
