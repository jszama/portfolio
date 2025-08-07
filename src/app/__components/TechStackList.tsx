import Image from "next/image";

export interface TechStack {
	name: string;
	logo: string;
}

interface TechStackListProps {
	techStacks: TechStack[];
}

export function TechStackList({ techStacks }: TechStackListProps) {
	return (
		<>
			{techStacks.map((tech: TechStack, index) => (
				<Image
					key={index}
					src={tech.logo}
					alt={tech.name}
					width={40}
					height={40}
					quality={85}
				/>
			))}
		</>
	);
}
