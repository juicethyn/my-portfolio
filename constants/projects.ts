export const projects = [
	{
		id: 1,
		name: "EmeraldBank",
		image: "/images/emeraldbank.png",
		short_description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sagittis mattis. Aliquam eu nisi ullamcorper dolor rhoncus ornare. Praesent massa libero, accumsan in diam a, rutrum condimentum mi. Cras pretium odio eros, quis luctus magna aliquet vitae. Ut non molestie tellus, at pellentesque tortor.",
		technologies: ["Flutter", "Dart", "Python"],
		type: "Mobile Bank Application",
		period: "May 2025 - Apr 2026",
		year: 2026,
		featured_reverse: false,
		featured_project: true,
		slug: "emeraldbank",
	},
	{
		id: 2,
		name: "Verifish",
		slug: "verifish",
		image: "/images/emeraldbank.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sagittis mattis. Aliquam eu nisi ullamcorper dolor rhoncus ornare. Praesent massa libero, accumsan in diam a, rutrum condimentum mi. Cras pretium odio eros, quis luctus magna aliquet vitae. Ut non molestie tellus, at pellentesque tortor.",
		short_description: "A brief description of Project 2.",
		technologies: ["React", "Node.js", "MongoDB"],
		type: "Web Application",
		period: "Jan 2024 - Dec 2024",
		year: 2026,
		role: "Group Leader",
		role_description:
			"Led a team of developers to design and implement the Verifish web application.",
		project_type: "Group Project",
		sourcecode: [
			{
				icon: "github",
				url: "https://github.com/verifish",
			},
			{
				icon: "linkedin",
				url: "https://github.com/verifish",
			},
		],
		featured_reverse: true,
		featured_project: false,
	},
	{
		id: 3,
		name: "TollTrack",
		image: "/images/emeraldbank.png",
		short_description: "A brief description of Project 3.",
		technologies: ["React", "Node.js", "MongoDB"],
		type: "Web Application",
		year: 2024,
		period: "Jan 2024 - Dec 2024",
		featured_reverse: false,
		featured_project: false,
		slug: "tolltrack",
	},
];

export default function getProjects() {
	return projects;
}

export async function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}
