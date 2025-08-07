"use client";
import { useState } from "react";
import Modal from "./Modal";

interface VideoModalButtonProps {
	text: string;
	videoId: string;
}

export default function VideoModalButton({ text, videoId }: VideoModalButtonProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className="transition-all duration-200 hover:scale-105 bg-[var(--primary-magenta)] hover:bg-[var(--hover-magenta)] text-white font-bold py-2 px-4 rounded cursor-pointer w-full h-auto sm:w-auto"
				type="button"
				onClick={() => setIsOpen(true)}
			>
				{text}
			</button>
			<Modal
				className="bg-black rounded-2xl w-full aspect-video"
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<iframe
					className="z-0 rounded-2xl w-full h-full"
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
					title="YouTube video about me"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
					allowFullScreen={true}
				/>
			</Modal>
		</>
	);
}
