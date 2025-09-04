import { FAQAccordion } from "./assets/FAQAccordion";

export default function FAQ() {
	return (
		<section
			id="faq"
			className="flex flex-col px-4 pb-12 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0 relative"
		>
			<h2 className="z-10 text-3xl text-[var(--primary-text)] font-bold">FAQ</h2>
			<h3 className="z-10 text-md text-[var(--secondary-text)] mb-4">
				A little more about me...
			</h3>
			<FAQAccordion />
		</section>
	);
}
