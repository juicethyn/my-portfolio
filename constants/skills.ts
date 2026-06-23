import { BiLogoFlask } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiMysql, DiPhotoshop, DiVisualstudio } from "react-icons/di";
import {
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaNodeJs,
	FaPhp,
	FaPython,
} from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
	RiFirebaseFill,
	RiFlutterFill,
	RiNextjsFill,
	RiReactjsFill,
	RiTailwindCssFill,
	RiVercelLine,
} from "react-icons/ri";

import { SiCanva } from "react-icons/si";

export const skills = {
	frontend: [
		{
			icon: RiNextjsFill,
			name: "Next.js",
		},
		{
			icon: RiReactjsFill,
			name: "React.js",
		},
		{
			icon: RiTailwindCssFill,
			name: "Tailwind",
		},
		{
			icon: RiFlutterFill,
			name: "Flutter",
		},
		{
			icon: BsTypescript,
			name: "TypeScript",
		},
		{
			icon: IoLogoJavascript,
			name: "JavaScript",
		},
	],

	backend: [
		{
			icon: FaNodeJs,
			name: "Node.js",
		},
		{
			icon: BiLogoFlask,
			name: "Flask",
		},
		{
			icon: FaPython,
			name: "Python",
		},
		{
			icon: FaPhp,
			name: "PHP",
		},
		{
			icon: RiFirebaseFill,
			name: "Firebase",
		},
		{
			icon: DiMysql,
			name: "MySQL",
		},
	],

	uiux_design: [
		{
			icon: FaFigma,
			name: "Figma",
		},
		{
			icon: DiPhotoshop,
			name: "Photoshop",
		},
		{
			icon: SiCanva,
			name: "Canva",
		},
	],

	tools: [
		{
			icon: FaGitAlt,
			name: "Git",
		},
		{
			icon: FaGithub,
			name: "GitHub",
		},
		{
			icon: DiVisualstudio,
			name: "VS Code",
		},
		{
			icon: ImAndroid,
			name: "Android Studio",
		},
		{
			icon: RiVercelLine,
			name: "Vercel",
		},
	],
};
