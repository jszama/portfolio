import { type Testimonial } from "./TestimonialCard";

export const testimonials = [
	{
		name: "John Doe",
		role: "Software Engineer",
		company: "Tech Solutions",
		testimonial:
			"Working with this team was a game-changer for our project. Their expertise and dedication were evident from day one.",
		image: "/images/testimonials/john_doe.jpg",
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
