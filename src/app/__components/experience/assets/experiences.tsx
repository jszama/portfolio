import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { ProjectLinkButton } from "../../projects/assets/ProjectData";
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
	website?: string;
};

export type ExperiencesType = {
	[key: string]: Experience;
};

export function ModalContentLayout({
	children,
	company,
	position,
	duration,
	image,
	techStack,
	website,
}: {
	children: ReactNode;
	company: string;
	position: string;
	duration: string;
	image: StaticImageData;
	techStack?: string[];
	website?: string;
}) {
	return (
		<div className="p-4">
			<div className="flex gap-4 flex-row justify-between pb-4 border-b-[1px] border-gray-500">
				<div className="flex flex-col">
					<h2 className="text-xl sm:text-3xl font-bold">
						{position} @ {company}
					</h2>
					<p className="text-sm text-gray-500">{duration}</p>
					{techStack && (
						<div className="flex flex-row gap-x-2 my-2">
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
					</div>
				</div>
				<Image
					src={image}
					alt={`${company} logo`}
					placeholder="blur"
					className="rounded-md"
					width={128}
					height={128}
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
	return <section className="flex flex-col sm:flex-row px-8 py-4 gap-4">{children}</section>;
};

const PropEco: Experience = {
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
	website: "https://www.propeco.io",
};

const Poland20: Experience = {
	company: "Poland 2.0",
	company_icon: Poland20Logo,
	position: "Frontend Engineer",
	duration: "Jan 2025 - Sep 2025",
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
	website: "https://www.poland20.com",
};

const Outlier: Experience = {
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
};

const Subsea7: Experience = {
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
		],
	},
	techStack: [PythonIcon],
};

const ModalContent = {
	PropEco: (
		<ModalContentLayout
			company={PropEco.company}
			position={PropEco.position}
			duration={PropEco.duration}
			image={PropEco.company_icon}
			techStack={PropEco.techStack}
			website={PropEco.website}
		>
			<ModalContentLayout.Text>
				My first professional engineering role, where I contributed across the full stack
				with a focus on automation, API integrations, and system scalability. I gained
				hands-on experience deploying production systems, managing cloud infrastructure, and
				implementing customer-facing features that improved engagement and retention.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Development</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				My main contributions included designing and implementing scalable backend services,
				integrating APIs, and building tools that improved both client and developer
				experience. Key highlights include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Deployed a self-hosted Large Language Model (LLM) on AWS, reducing third-party
					API costs by ~50% while increasing data privacy and control.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Built a secure report ordering and automatic PDF generation system using Stripe,
					Puppeteer, and API key authentication, enabling seamless access to paid
					geospatial and company data.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Developed embeddable widgets for client websites to display live API data,
					improving platform integration and customer engagement.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Implemented user engagement features including OTP authentication, welcome
					emails, and CRON job notifications, resulting in smoother onboarding and better
					retention.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Created an internal schema validation tool and GitHub Actions workflows for
					automated deployment, reducing deployment times by ~40% and accelerating
					developer productivity.
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>

			<ModalContentLayout.Heading>Lessons Learned</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				This role gave me valuable insights into how professional engineering teams operate
				and how technical decisions impact business outcomes. Main takeaways include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Importance of balancing performance, security, and cost in production systems
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Gained practical experience deploying and maintaining cloud infrastructure on
					AWS
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Learned how automation (CI/CD, schema validation) accelerates developer
					workflows
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Improved my ability to design customer-facing features that directly impact
					engagement and retention
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Understood how to collaborate within a professional environment while delivering
					independently owned features
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>
		</ModalContentLayout>
	),
	Poland20: (
		<ModalContentLayout
			company={Poland20.company}
			position={Poland20.position}
			duration={Poland20.duration}
			image={Poland20.company_icon}
			techStack={Poland20.techStack}
			website={Poland20.website}
		>
			<ModalContentLayout.Text>
				My first dedicated frontend software engineering role, where I am responsible for
				maintaining and improving the organisation’s public website. I contributed across
				internationalisation, content management, performance optimisation, and
				accessibility, ensuring the platform meets both user expectations and sponsor
				requirements.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Planning</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				The role required identifying high-impact improvements for usability and
				performance. Planning focused on making the site accessible to a wider audience,
				enabling non-technical contributors to manage content, and ensuring the platform was
				performant and standards-compliant.
			</ModalContentLayout.Text>

			<ModalContentLayout.Heading>Development</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				I worked on a series of key initiatives that significantly enhanced the site’s
				functionality, performance, and accessibility. Main contributions include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Integrated internationalisation (i18n) support using Lingui, enabling full
					bilingual functionality in English and Polish across the website.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Designed and developed a dynamic blog system with markdown support, allowing the
					marketing team to independently publish and manage 100% more content.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Optimised performance by implementing lazy loading and WebP image formats,
					reducing image load times by ~45% and improving Lighthouse performance score by
					5+ points.
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Achieved WCAG 2.1 AA compliance, raising accessibility scores from 65% to 100%
					and ensuring compliance with sponsor contractual requirements.
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>

			<ModalContentLayout.Heading>Lessons Learned</ModalContentLayout.Heading>
			<ModalContentLayout.Text>
				This role gave me practical experience in professional frontend development and
				maintaining a high-visibility production website. Key lessons include:
			</ModalContentLayout.Text>
			<ModalContentLayout.List>
				<ModalContentLayout.ListItem>
					Gained hands-on experience with internationalisation and accessibility standards
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Learned how to design systems that empower non-technical teams to manage content
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Understood the importance of performance optimisation for user engagement and
					SEO
				</ModalContentLayout.ListItem>
				<ModalContentLayout.ListItem>
					Developed skills in balancing stakeholder needs with technical implementation
				</ModalContentLayout.ListItem>
			</ModalContentLayout.List>
		</ModalContentLayout>
	),
};

export const Experiences: ExperiencesType = {
	PropEco: { ...PropEco, modalContent: ModalContent.PropEco },
	Poland20: { ...Poland20, modalContent: ModalContent.Poland20 },
	Outlier,
	Subsea7,
};

export { Outlier, Poland20, PropEco, Subsea7 };
