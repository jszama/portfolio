"use client";
import Contacts from "./__components/Contacts";
import Experience from "./__components/experience";
import Footer from "./__components/footer";
import Header from "./__components/Header";
import Hero from "./__components/hero";
import Projects from "./__components/projects";
import Testimonials from "./__components/testimonials";

import { useEffect, useState } from "react";
import Certifications from "./__components/certifications";
// import FAQ from "./__components/FAQ";
import { SlideInAnimation } from "./__components/SlideInAnimation";
import { SplashScreen } from "./__components/SplashScreen";

export default function Home() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<SplashScreen visible={showSplash} />
			{!showSplash && (
				<>
					<Header />
					<main className="pt-16">
						<SlideInAnimation duration={0.5} from="top" delay={1.3}>
							<Hero />
						</SlideInAnimation>
						<SlideInAnimation duration={0.5} from="left">
							<Projects />
						</SlideInAnimation>
						<SlideInAnimation duration={0.5} from="right">
							<Experience />
						</SlideInAnimation>
						<SlideInAnimation duration={0.5} from="left">
							<Testimonials />
						</SlideInAnimation>
						<SlideInAnimation duration={0.5} from="right">
							<Certifications />
						</SlideInAnimation>
						{/* <SlideInAnimation duration={0.5} from="left">
							<FAQ />
						</SlideInAnimation> */}
					</main>
					<Footer />
					<Contacts />
				</>
			)}
		</>
	);
}
