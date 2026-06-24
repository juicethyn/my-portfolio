export const projects = [
	{
		id: 1,
		name: "EmeraldBank",
		image: "/images/emeraldbank.png",
		short_description: "A mobile bank application for managing finances.",
		technologies: ["Flutter", "Dart", "Python"],
		type: "Mobile Bank Application",
		period: "May 2025 - Apr 2026",
		featured_reverse: false,
		featured_project: true,
	},
	{
		id: 2,
		name: "Project 2",
		image: "/images/emeraldbank.png",
		short_description: "A brief description of Project 2.",
		technologies: ["React", "Node.js", "MongoDB"],
		type: "Web Application",
		period: "Jan 2024 - Dec 2024",
		featured_reverse: true,
		featured_project: false,
	},
	{
		id: 3,
		name: "Project 3",
		image: "/images/emeraldbank.png",
		short_description: "A brief description of Project 3.",
		technologies: ["React", "Node.js", "MongoDB"],
		type: "Web Application",
		period: "Jan 2024 - Dec 2024",
		featured_reverse: false,
		featured_project: false,
	},
];

export default function getProjects() {
	return projects;
}
