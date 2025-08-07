import { type StaticImageData } from "next/image";
import { type ReactElement } from "react";

export type ProjectType = {
	name: string;
	shortDescription: string;
	modalContent?: ReactElement;
	image: StaticImageData | string;
	techStack?: string[];
	github?: string;
	demo?: string;
};

export type ProjectsType = {
	[key: string]: ProjectType;
};
