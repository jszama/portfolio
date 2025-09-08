"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: "Why did you choose Software Engineering?",
		answer: "I have been around computers and technology my whole life, watching my older brothers play games and eventually being allowed to join in. As I got older, I spent a lot of my time in front of a screen, and I wanted to do something productive with that time. During CS classes in high school, programming really clicked with me and just made sense. I loved the problem-solving aspect and the creativity involved in building something from scratch. It felt like a perfect blend of logic and imagination, which is why I decided to pursue Software Engineering.",
	},
	{
		question: "Do you have any hobbies outside of coding?",
		answer: "Most definitely. I try really hard to stay away from the screens whenever possible, some of my favourite activities include reading, playing basketball, working out, and spending time with my family and friends. I try not to let coding take over my life, as much as I love it, I think it's important to have a balance and enjoy other aspects of life too.",
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
			className="bg-[var(--muted-background)] rounded-lg border border-[var(--divider-color)] overflow-hidden hover:border-[var(--primary-magenta)] transition-[border-color] duration-200"
			key={index}
		>
			<button
				className="w-full flex justify-between items-center p-4 text-left text-[var(--primary-text)] hover:bg-[var(--secondary-dark-background)] transition-[background-color] duration-200 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-md font-medium hover:text-[var(--primary-magenta)] transition-[color] duration-200">
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
