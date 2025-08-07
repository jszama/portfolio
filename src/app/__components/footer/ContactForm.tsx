import React from "react";

export default function ContactForm() {
	return (
		<form className="flex flex-col w-[50%] h-auto p-4 sm:p-8 gap-2">
			<h2 className="text-2xl text-[var(--primary-text)] font-bold">Send me a message!</h2>
			<ContactFormInput
				label="Email"
				inputType="email"
				inputName="email"
				inputPlaceholder="Email"
				required
			/>
			<ContactFormInput
				label="Message"
				inputName="message"
				inputPlaceholder="Message"
				required
				textarea
			/>
			<button
				type="submit"
				className="bg-[var(--primary-magenta)] text-white p-2 mt-4 rounded-md cursor-pointer"
			>
				Send
			</button>
		</form>
	);
}

function ContactFormInput({
	label,
	inputType,
	inputName,
	inputPlaceholder,
	required,
	textarea,
}: {
	label: string;
	inputType?: string;
	inputName: string;
	inputPlaceholder: string;
	required: boolean;
	textarea?: boolean;
}) {
	return (
		<section className="flex flex-col gap-2">
			<label className="text-[var(--primary-text)] text-sm">{label}</label>
			{textarea ? (
				<textarea
					name={inputName}
					placeholder={inputPlaceholder}
					required={required}
					className="p-2 border-2 border-[var(--primary-magneta)] rounded-md text-sm resize-none"
				/>
			) : (
				<input
					type={inputType}
					name={inputName}
					placeholder={inputPlaceholder}
					required={required}
					className="p-2 border-2 border-[var(--primary-magneta)] rounded-md text-sm"
				/>
			)}
		</section>
	);
}
