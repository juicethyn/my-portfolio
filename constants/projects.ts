export const projects = [
	{
		id: 1,
		name: "Verifish",
		slug: "verifish",
		image: "/images/emeraldbank.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sagittis mattis. Aliquam eu nisi ullamcorper dolor rhoncus ornare. Praesent massa libero, accumsan in diam a, rutrum condimentum mi. Cras pretium odio eros, quis luctus magna aliquet vitae. Ut non molestie tellus, at pellentesque tortor.",
		short_description: "A brief description of Project 2.",
		technologies: ["React", "Node.js", "MongoDB", "Ligma", "Express.js"],
		type: "Web Application",
		period: "Jan 2024 - Dec 2024",
		year: 2026,
		role: "Group Leader",
		role_description:
			"Led a team of developers to design and implement the Verifish web application.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/verifish",
			},
			{
				id: 2,
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/juzzthynperez/",
			},
		],
		featured_reverse: false,
		featured_project: true,
	},
	{
		id: 2,
		name: "Emerald Bank",
		slug: "emeraldbank",
		image: "/images/emeraldbank.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sagittis mattis. Aliquam eu nisi ullamcorper dolor rhoncus ornare. Praesent massa libero, accumsan in diam a, rutrum condimentum mi. Cras pretium odio eros, quis luctus magna aliquet vitae. Ut non molestie tellus, at pellentesque tortor.",
		short_description: "A brief description of Project 2.",
		technologies: ["React", "Node.js", "MongoDB", "Ligma", "Express.js"],
		type: "Web Application",
		period: "Jan 2024 - Dec 2024",
		year: 2026,
		role: "Group Leader",
		role_description:
			"Led a team of developers to design and implement the Verifish web application.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/verifish",
			},
			{
				id: 2,
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/juzzthynperez/",
			},
		],
		featured_reverse: true,
		featured_project: true,
	},
	{
		id: 3,
		name: "TollTrack",
		slug: "tolltrack",
		image: "/images/emeraldbank.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sagittis mattis. Aliquam eu nisi ullamcorper dolor rhoncus ornare. Praesent massa libero, accumsan in diam a, rutrum condimentum mi. Cras pretium odio eros, quis luctus magna aliquet vitae. Ut non molestie tellus, at pellentesque tortor.",
		short_description: "A brief description of Project 2.",
		technologies: ["React", "Node.js", "MongoDB", "Ligma", "Express.js"],
		type: "Web Application",
		period: "Jan 2024 - Dec 2024",
		year: 2026,
		role: "Group Leader",
		role_description:
			"Led a team of developers to design and implement the Verifish web application.",
		project_type: "Group Project",
		sourcecode: [
			{
				id: 1,
				name: "GitHub",
				url: "https://github.com/verifish",
			},
			{
				id: 2,
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/juzzthynperez/",
			},
		],
		featured_reverse: true,
		featured_project: false,
	},
];

export default function getProjects() {
	return projects;
}

export async function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export async function getProjectNavigation(slug: string) {
	const projects = await getProjects();

	const index = projects.findIndex((project) => project.slug === slug);

	if (index === -1) {
		return null;
	}

	return {
		prev: projects[index - 1] || null,
		next: projects[index + 1] || null,
	};
}
