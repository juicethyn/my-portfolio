import getProjects from "../../constants/projects";
import FeaturedProjectsCard from "../cards/FeaturedProjectsCard";

export default async function FeaturedProjects() {
	const projects = await getProjects();
	return (
		<>
			{projects
				.filter((project) => project.featured_project)
				.map((project) => (
					<FeaturedProjectsCard
						key={project.id}
						name={project.name}
						image={project.image}
						short_description={project.short_description}
						technologies={project.technologies}
						type={project.type}
						period={project.period}
						featured_reverse={project.featured_reverse}
					/>
				))}
		</>
	);
}
