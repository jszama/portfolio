import Chris_Hardman from "./chris_hardman.webp";
import Dagmara_Kowalska from "./dagmara_kowalska.webp";
import Michael_Ajayi from "./michael_ajayi.webp";
import { type Testimonial } from "./TestimonialCard";

export const testimonials: Testimonial[] = [
	{
		name: "Dagmara Kowalska",
		role: "Talent Acquisition Snr. Manager",
		company: "Boston Consulting Group",
		testimonial:
			"Jakub demonstrated professionalism, organizational skills, and dedication, making a significant contribution to the success of the 2025 Poland 2.0 summit. We recommend Jakub Szamotulski to any organization seeking a capable, motivated, and trustworthy individual.",
		image: Dagmara_Kowalska,
		link: "https://www.linkedin.com/in/dagmara-kowalska-gumna/",
		downloadable: "./bcg_testimonial.pdf",
	},
	{
		name: "Chris Hardman",
		role: "Founder & CEO",
		company: "PropEco",
		testimonial:
			"Out of more than 80 applicants, Jakub was the clear standout. He combines technical depth with a real eye for detail, and the solutions he built at PropEco directly improved our platform and processes. I have no hesitation recommending him as a software engineer.",
		image: Chris_Hardman,
		link: "https://www.linkedin.com/in/chrishardman",
	},
	{
		name: "Michael Ajayi",
		role: "Mentor & Senior Software Engineer",
		company: "Motopay",
		testimonial:
			"Jakub and I crossed paths at a pivotal moment, when we had to choose between staying comfortable at our current level or investing the time and resources to reach the next one. I'm grateful that our friendship and collaboration carried us through to success. I'd do it all over again in a heartbeat.",
		image: Michael_Ajayi,
		link: "https://www.linkedin.com/in/michael-ajayi/",
	},
] as Testimonial[];
