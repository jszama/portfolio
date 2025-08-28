import { CertificationList } from "./assets/CertificationList";

export default function Certifications() {
	return (
		<section
			id="certifications"
			className="flex flex-col px-4 py-12 sm:mx-24 sm:py-0 sm:pb-12 sm:px-0 relative"
		>
			<h2 className="z-10 text-3xl text-[var(--primary-text)] font-bold">Certifications</h2>
			<h3 className="z-10 text-md text-[var(--secondary-text)] mb-4">
				Few badges under my belt...
			</h3>
			<CertificationList />
			<div className="w-full h-full rounded-full bg-radial from-[var(--hover-magenta)] to-transparent blur-3xl opacity-50 absolute z-0" />
		</section>
	);
}
