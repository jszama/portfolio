import { useEffect, useState } from "react";
import SocialMediaLinks from "./footer/SocialMediaLinks";

export default function Contacts() {
	const [atBottom, setAtBottom] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const docHeight = document.documentElement.scrollHeight;
			setAtBottom(scrollY + windowHeight >= docHeight - 16);
		}
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const sectionStyle = atBottom
		? { transform: "translateY(-50px)", transition: "transform 0.3s" }
		: { transition: "transform 0.3s" };

	return (
		<div
			className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-min z-50 rounded-4xl p-3 backdrop-blur-md bg-[var(--secondary-dark-background)] border-2 border-[var(--primary-dark-background)] shadow-lg"
			style={sectionStyle}
		>
			<SocialMediaLinks />
		</div>
	);
}
