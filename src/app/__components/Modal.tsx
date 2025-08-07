import { AnimatePresence, motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { type ReactNode } from "react";

interface ModalProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({ className, children, isOpen, setIsOpen }: ModalProps) {
	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<Dialog
					as="div"
					className={`fixed inset-0 z-50 flex items-center justify-center`}
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="fixed inset-0 bg-black/80"
						aria-hidden="true"
						onClick={() => setIsOpen(false)}
					/>

					{/* Animated Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className={`relative p-4 max-w-4xl shadow-2xl ${className}`}
					>
						{children}

						<button
							onClick={() => setIsOpen(false)}
							className="cursor-pointer absolute top-2 right-2 text-white text-3xl font-bold z-10 hover:text-gray-300 transition-all duration-200"
						>
							×
						</button>
					</motion.div>
				</Dialog>
			)}
		</AnimatePresence>
	);
}
