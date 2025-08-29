import { type Testimonial } from "./TestimonialCard";
import Michael_Ajayi from "./michael_ajayi.webp";

export const testimonials: Testimonial[] = [
	{
		name: "Michael Ajayi",
		role: "Mentor & Senior Software Engineer",
		company: "Motopay",
		testimonial:
			"Jakub and I crossed paths at a pivotal moment, when we had to choose between staying comfortable at our current level or investing the time and resources to reach the next one. I'm grateful that our friendship and collaboration carried us through to success. I'd do it all over again in a heartbeat.",
		image: Michael_Ajayi,
		link: "https://www.linkedin.com/in/michael-ajayi/",
	},
	{
		name: "Jane Smith",
		role: "Product Manager",
		company: "Innovatech",
		testimonial:
			"Their attention to detail and innovative approach helped us launch our product ahead of schedule. Highly recommend!",
		image: "/images/testimonials/jane_smith.jpg",
	},
	{
		name: "Alice Johnson",
		role: "UX Designer",
		company: "Creative Minds",
		testimonial:
			"The collaboration was seamless, and the results exceeded our expectations. A truly talented team!",
		image: "/images/testimonials/alice_johnson.jpg",
	},
	{
		name: "Bob Brown",
		role: "Data Scientist",
		company: "Data Insights",
		testimonial:
			"Their analytical skills and problem-solving abilities were crucial in driving our data projects forward. Fantastic experience!",
		image: "/images/testimonials/bob_brown.jpg",
	},
] as Testimonial[];
