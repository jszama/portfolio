import { StaticImageData } from "next/image";
import { JSX } from "react";

export type ProjectType = {
  name: string;
  shortDescription: string;
  modalContent: JSX.Element;
  image: StaticImageData | string;
  techStack?: string[];
  github?: string;
  demo?: string;
}

export type ProjectsType = {
  [key: string]: ProjectType;
};


