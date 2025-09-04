import type { EmblaOptionsType } from "embla-carousel";
import { VideoModalButton } from "../VideoModalButton";
import { TechStackCarousel } from "./assets/TechStackCarousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

// TODO: Record Video
export default function Hero() {
	return (
		<section
			id="about-me"
			className="relative flex flex-col justify-end w-auto h-auto min-h-[65vh] my-12 mx-4 sm:mx-32 xl:mx-42 rounded-lg p-6 sm:p-10 shadow-2xl overflow-hidden will-change-transform"
		>
			{/* Background image layer */}
			<div
				className="absolute inset-0 bg-cover bg-top sm:bg-right bg-no-repeat transform-gpu"
				style={{
					backgroundImage: "url('/hero_section_thumbnail.webp')",
					willChange: "transform",
				}}
			/>
			{/* Gradient mask overlay */}
			<div
				className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[var(--secondary-dark-background)] from-30% to-transparent transform-gpu"
				style={{ willChange: "opacity" }}
			/>
			{/* Content layer */}
			<div className="relative z-10">
				<h1 className="text-2xl sm:text-3xl font-bold text-[var(--primary-text)] sm:mb-1">
					Jakub Szamotulski
				</h1>
				<div className="flex flex-col md:flex-row sm:mb-4">
					<span className="w-full md:w-[40%] flex flex-row justify-between items-end gap-2 sm:flex-col sm:items-start">
						<span>
							<h2 className="text-md sm:text-xl text-[var(--secondary-text)] mb-1">
								Fullstack Developer
							</h2>
							<h3 className="text-xs sm:text-sm flex items-center mb-1 gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4 fill-current text-[var(--primary-text)]"
									viewBox="0 0 24 24"
								>
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
								</svg>
								Aberdeen/Glasgow, Scotland
							</h3>
						</span>
						<TechStackCarousel options={OPTIONS} size={48} />
					</span>
				</div>
				<p className="text-[var(--primary-text)] leading-relaxed mb-6 w-full md:w-[40%] hidden sm:block text-justify">
					I&apos;m a Fullstack Developer and third-year Software Engineering student at
					the University of Strathclyde. I build fast, scalable applications primarily
					using React - and I don&apos;t just follow tutorials. I build real solutions to
					real problems.
				</p>
				<p className="text-[var(--primary-text)] leading-relaxed mb-4 mt-2 sm:mt-0 sm:mb-6 w-full md:w-[40%] sm:hidden">
					Watch this short documentary about my life and how I became a Fullstack
					Developer.
				</p>
				<div className="flex flex-row space-x-4 h-full items-baseline">
					<VideoModalButton text="Watch Now" videoId="RcUtfUNBSrU" />
					<a
						href={"/Jakub_Szamotulski_Resume.pdf"}
						target="_blank"
						title="Read my resume!"
						className="transition-[color,transform] duration-200 hover:scale-105 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded flex justify-center w-full h-auto sm:w-auto text-sm sm:text-base"
						rel="noreferrer"
					>
						My Resume
					</a>
				</div>
			</div>
		</section>
	);
}
