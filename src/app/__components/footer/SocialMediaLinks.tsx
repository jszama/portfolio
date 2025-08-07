import { type ReactNode } from "react";

const socialMediaLinks = [
	{
		href: "mailto:jmszamotulski@gmail.com",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="3" y="5" width="18" height="14" rx="2" />
				<polyline points="3 7 12 13 21 7" />
			</svg>
		),
	},
	{
		href: "https://www.linkedin.com/in/jakub-szamotulski/",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z" />
			</svg>
		),
	},
	{
		href: "https://github.com/jszama",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.646.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.938.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
			</svg>
		),
	},
];

export default function SocialMediaLinks() {
	return (
		<section className="flex flex-row gap-x-2 justify-center items-center">
			{socialMediaLinks.map((link, index) => (
				<SocialMediaLink key={index} href={link.href} icon={link.icon} />
			))}
		</section>
	);
}

function SocialMediaLink({ href, icon }: { href: string; icon: ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-[var(--accent-text)] hover:text-[var(--primary-magenta)] transition duration-300 hover:scale-110"
		>
			{icon}
		</a>
	);
}
