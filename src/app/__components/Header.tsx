"use client";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const NavigationItems = [
	{ name: "About me", href: "#about-me" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experience", href: "#experience" },
	{ name: "Testimonials", href: "#testimonials" },
];

export default function Header() {
	return (
		<header className="text-[var(--primary-text)] w-screen fixed top-0 z-50 border-b-2 border-[var(--hover-magenta)] bg-[var(--secondary-dark-background)] opacity-95">
			<div className="flex justify-between items-center px-3 sm:px-4 md:px-6 py-4">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--hover-magenta)]">
					<TypeAnimation
						sequence={["", 1300, "Jakub Maciej Szamotulski", 600, "jszama."]}
						speed={60}
						className="inline-block"
					/>
				</h1>
				<DropDownMenu />
				<NavBar />
			</div>
		</header>
	);
}

function DropDownMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropDown = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest(".dropdown-menu") && !target.closest(".dropdown-button")) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside, { signal });

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<button
				className="sm:hidden dropdown-button text-[var(--primary-text)] hover:text-[var(--hover-magenta)] transition-all duration-200"
				onClick={toggleDropDown}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-8 h-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
			{isOpen && (
				<div className="absolute top-12 right-2 bg-[var(--secondary-dark-background)] border-2 border-[var(--primary-magenta)] text-[var(--primary-text)] rounded-md shadow-lg px-4 py-2">
					<ul className="space-y-2">
						{NavigationItems.map((item) => (
							<li
								key={item.name}
								className="hover:text-[var(--hover-magenta)] transition-all duration-200"
							>
								<a
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										document
											.querySelector(item.href)
											?.scrollIntoView({ behavior: "smooth" });
									}}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

function NavBar() {
	return (
		<nav className="hidden sm:flex">
			<ul className="flex space-x-6 text-xl">
				{NavigationItems.map((item) => (
					<NavigationItem key={item.name} name={item.name} href={item.href} />
				))}
			</ul>
		</nav>
	);
}

function NavigationItem({ name, href }: { name: string; href: string }) {
	return (
		<li className="text-[var(--primary-text)] hover:text-[var(--hover-magenta)] transition-all duration-200">
			<a
				href={href}
				onClick={(e) => {
					e.preventDefault();
					document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
				}}
			>
				{name}
			</a>
		</li>
	);
}
