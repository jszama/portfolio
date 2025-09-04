export default function Footer() {
	return (
		<footer
			className="flex flex-col justify-center h-full w-full gap-4 pt-4 sm:pt-6 pb-4 bg-[var(--primary-dark-background)] border-t-2 border-[var(--primary-magenta)]"
			id="footer"
		>
			<p className="text-[var(--accent-text)] text-center">
				Designed and built by me :){" "}
				<a
					href="https://github.com/jszama/portfolio"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[var(--hover-magenta)] underline font-semibold"
				>
					Repo here
				</a>
			</p>
		</footer>
	);
}
