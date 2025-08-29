import { type StaticImageData } from "next/image";
import { type ReactElement } from "react";
import type { TechStackIcon } from "../../TechStackIcons";

export type ProjectType = {
	name: string;
	shortDescription: string;
	modalContent?: ReactElement;
	image: StaticImageData;
	techStack?: TechStackIcon[];
	github?: string;
	website?: string;
};

export type ProjectsType = {
	[key: string]: ProjectType;
};
