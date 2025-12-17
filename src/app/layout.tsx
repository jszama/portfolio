import type { Metadata } from "next";
import { type ReactNode } from "react";
import "./globals.css";

export const viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#0f172a",
} as const;

export const metadata: Metadata = {
	title: "Jakub Szamotulski | Fullstack Developer Portfolio",
	description:
		"Portfolio of Jakub Szamotulski, a passionate Fullstack Developer and third-year Software Engineering student at the University of Strathclyde. Specialized in React, Next.js, TypeScript, and modern web technologies. Building fast, scalable applications and real solutions to real problems.",
	keywords: [
		"Jakub Szamotulski",
		"Fullstack Developer",
		"Software Engineering",
		"React Developer",
		"Next.js",
		"TypeScript",
		"Web Development",
		"Portfolio",
		"University of Strathclyde",
		"Scotland",
		"JavaScript",
		"Frontend",
		"Backend",
		"jszama",
	],
	authors: [{ name: "Jakub Szamotulski", url: "https://github.com/jszama" }],
	creator: "Jakub Szamotulski",
	publisher: "Jakub Szamotulski",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://jszama.dev"),
	alternates: {
		canonical: "https://jszama.dev",
	},
	openGraph: {
		title: "Jakub Szamotulski - Fullstack Developer",
		description:
			"Passionate Fullstack Developer specializing in React, Next.js, and modern web technologies. Building scalable applications and innovative solutions.",
		url: "/",
		siteName: "Jakub Szamotulski Portfolio",
		images: [
			{
				url: "/hero_section_thumbnail.webp",
				width: 1200,
				height: 630,
				alt: "Jakub Szamotulski - Fullstack Developer",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jakub Szamotulski - Fullstack Developer",
		description:
			"Passionate Fullstack Developer specializing in React, Next.js, and modern web technologies.",
		images: ["/hero_section_thumbnail.webp"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: process.env.GOOGLE_SITE_VERIFICATION,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Jakub Szamotulski",
		alternateName: "jszama",
		jobTitle: "Fullstack Developer",
		description:
			"Passionate Fullstack Developer and Software Engineering student specializing in React, Next.js, and modern web technologies.",
		url: "https://jszama.dev",
		image: "https://jszama.dev/hero_section_thumbnail.webp",
		logo: "https://jszama.dev/favicon.ico",
		sameAs: ["https://github.com/jszama", "https://linkedin.com/in/jakub-szamotulski"],
		alumniOf: {
			"@type": "EducationalOrganization",
			name: "University of Strathclyde",
			url: "https://www.strath.ac.uk",
		},
		knowsAbout: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Node.js",
			"Python",
			"Web Development",
			"Software Engineering",
			"Fullstack Development",
		],
		address: {
			"@type": "PostalAddress",
			addressLocality: "Aberdeen/Glasgow",
			addressCountry: "Scotland",
		},
	};

	return (
		<html lang="en" className="overflow-x-hidden">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="/hero_section_thumbnail.webp"
					as="image"
					type="image/webp"
					imageSrcSet="/hero_section_thumbnail.webp"
					imageSizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 1200px"
				/>
			</head>
			<body className={`antialiased max-w-screen h-full overflow-y-scroll overflow-x-hidden`}>
				{children}
			</body>
		</html>
	);
}
