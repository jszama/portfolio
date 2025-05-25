import { ProjectsType } from "./ProjectTypes";
import { NextJsIcon, ReactIcon, TypescriptIcon, MongoDBIcon, PythonIcon, ElectronIcon, JavascriptIcon } from '../../TechStackIcons';
import musclememory_thumbnail from './musclememory_thumbnail.webp';
import gesturebind_thumbnail from './gesturebind_thumbnail.webp';

const ModalContent = {
  MuscleMemory: (
    <div>
      <h2>MuscleMemory</h2>
      <p>Workout tracking application</p>
      <p>Fullstack application to track workouts and progress</p>
    </div>
  ),
  GestureBind: (
    <div>
      <h2>Gesture Bind</h2>
      <p>Gesture recognition application</p>
      <p>Personal portfolio to showcase projects</p>
    </div>
  ),
  Promptly: (
    <div>
      <h2>Promptly</h2>
      <p>AI powered prompt generator</p>
      <p>Fullstack application to write and share blog posts</p>
    </div>
  )
};

export const ProjectList: ProjectsType = {
  MuscleMemory: {
    name: "MuscleMemory",
    shortDescription: "Workout tracking application",
    modalContent: ModalContent.MuscleMemory,
    image: musclememory_thumbnail,
    techStack: [NextJsIcon, ReactIcon, TypescriptIcon, MongoDBIcon],
  },
  GestureBind: {
    name: "Gesture Bind",
    shortDescription: "Gesture recognition application",
    modalContent: ModalContent.GestureBind,
    image: gesturebind_thumbnail,
    techStack: [PythonIcon, ElectronIcon]
  },
  Promptly: {
    name: "Promptly",
    shortDescription: "AI powered prompt generator",
    modalContent: ModalContent.Promptly,
    image: musclememory_thumbnail,
    techStack: [JavascriptIcon]
  }
};