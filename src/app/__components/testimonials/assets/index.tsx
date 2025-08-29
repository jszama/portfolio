import { type Testimonial } from "./TestimonialCard";
import Chris_Hardman from "./chris_hardman.webp";
import Michael_Ajayi from "./michael_ajayi.webp";

export const testimonials: Testimonial[] = [
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
