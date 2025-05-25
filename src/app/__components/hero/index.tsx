import React from 'react'
import TechStackCarousel from './assets/TechStackCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
import VideoModalButton from '../VideoModalButton'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

export default function Hero() {
  return (
	  <section id="about-me" className="flex flex-col justify-end w-auto h-auto min-h-[60vh] my-12 mx-4 sm:mx-32 xl:mx-42 rounded-lg p-6 sm:p-10 bg-cover shadow-2xl bg-[linear-gradient(to_top,var(--secondary-dark-background)_30%,transparent),url('/jakub_solo.jpg')] sm:bg-[linear-gradient(to_right,var(--secondary-dark-background)_30%,transparent),url('/jakub_solo.jpg')] bg-top sm:bg-right bg-no-repeat will-change-transform">
		<h1 className="text-2xl sm:text-3xl font-bold text-[var(--primary-text)] sm:mb-1">Jakub Szamotulski</h1>
		<div className='flex flex-col md:flex-row sm:mb-4'>
			<span className="w-full md:w-[40%] flex flex-row justify-between items-end gap-2 sm:flex-col sm:items-start">
				<span>
					<h2 className="text-md sm:text-xl text-[var(--secondary-text)] mb-1">Fullstack Developer</h2>
					<h3 className='text-xs sm:text-sm flex items-center mb-1 gap-1'>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-[var(--primary-text)]" viewBox="0 0 24 24">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
						</svg>
						Aberdeen/Glasgow, Scotland
					</h3>
				</span>
				<TechStackCarousel options={OPTIONS} size={48}/>
			</span>
		</div>
		<p className="text-[var(--primary-text)] leading-relaxed mb-6 w-full md:w-[40%] hidden sm:block text-justify">
			I&apos;m a Fullstack Developer and third-year Software Engineering student at the University of Strathclyde. I build fast, scalable applications using tools like Next.js, React, and MongoDB - and I don&apos;t just follow tutorials. I ship real products.
		</p>
		<p className="text-[var(--primary-text)] leading-relaxed mb-4 mt-2 sm:mt-0 sm:mb-6 w-full md:w-[40%] sm:hidden">
			Watch this short documentary about my life and how I became a Fullstack Developer.
		</p>
		<div className="flex flex-row space-x-4 h-full items-baseline">
			<VideoModalButton text="Watch Now" videoId="JwYzHW_q3c4" />
			<a href={"/resume.pdf"} target='_blank' title="Read my resume!" className="transition-all duration-200 hover:scale-105 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded flex justify-center w-full h-auto sm:w-auto" rel="noreferrer">My Resume</a>
		</div>
    </section>
  )
}
