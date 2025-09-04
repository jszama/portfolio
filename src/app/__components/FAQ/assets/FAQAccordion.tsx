"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: "Do you have any hobbies outside of coding?",
		answer: "Yeah a lot actually. I try really hard to stay away from the screens whenever possible so some include reading books, playing basketball, exercising, and spending time with my family and friends.",
	},
	{
		question: "What is your go-to song or playlist?",
		answer: "My go-to is usually something by Brent Faiyaz, leaning towards 'Clouded' or 'Mercedes'. I've always been a big fan of RnB, Afrobeats, and Rap, and those genres have been a part of my life for as long as I can remember.",
	},
	{
		question: "How do you wind down after a long day?",
		answer: "I like to wind down by going to the gym or playing basketball. It clears my mind and gets rid of any stress or negative energy I have, it's my form of therapy. I also pray a lot, it keeps me grounded and full of belief in myself and my future.",
	},
	{
		question: "What motivates you?",
		answer: "This is quite a sentimental piece for me, so will be a bit longer than others. As a first-generation immigrant, I am deeply motivated by the endless sacrifices my parents made to give me opportunities they didn't have. I will make them proud and ensure their hard work was worth it by building a successful future where I can also provide for them. Their support and struggles have shaped who I am, and it inspires me to work hard, stay resilient, and never take opportunities for granted.",
	},
];

function AccordionItem({ faq, index }: { faq: FAQItem; index: number }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="bg-[var(--muted-background)] rounded-lg border border-[var(--divider-color)] overflow-hidden hover:border-[var(--primary-magenta)] transition-colors duration-200"
			key={index}
		>
			<button
				className="w-full flex justify-between items-center p-4 text-left text-[var(--primary-text)] hover:bg-[var(--secondary-dark-background)] transition-colors duration-200 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-md font-medium hover:text-[var(--primary-magenta)] transition-colors duration-200">
					{faq.question}
				</span>
				<motion.svg
					className="h-6 w-6 flex-shrink-0 ml-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2.5}
					animate={{
						rotate: isOpen ? 180 : 0,
						color: isOpen ? "var(--primary-magenta)" : "var(--secondary-text)",
					}}
					whileHover={{
						color: "var(--primary-magenta)",
						scale: 1.05,
					}}
					transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
				</motion.svg>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							height: 0,
							opacity: 0,
							scaleY: 0,
						}}
						animate={{
							height: "auto",
							opacity: 1,
							scaleY: 1,
						}}
						exit={{
							height: 0,
							opacity: 0,
							scaleY: 0,
						}}
						transition={{
							height: { duration: 0.2, ease: "easeInOut" },
							opacity: { duration: 0.2 },
							scaleY: { duration: 0.2, ease: "easeInOut" },
						}}
						style={{
							transformOrigin: "top",
						}}
						className="overflow-hidden border-t border-[var(--divider-color)]"
					>
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							transition={{
								duration: 0.2,
								ease: "easeOut",
							}}
							className="p-4 text-[var(--secondary-text)] leading-relaxed text-sm sm:text-base"
						>
							{faq.answer}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export function FAQAccordion() {
	return (
		<div className="w-full max-w-3xl space-y-2">
			{faqData.map((faq, index) => (
				<AccordionItem key={index} faq={faq} index={index} />
			))}
		</div>
	);
}
