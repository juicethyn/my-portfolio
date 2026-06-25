import getProjects from "../../constants/projects";
import ProjectCard from "../cards/ProjectCard";

export default async function () {
	const projects = await getProjects();
	return (
		<div>
			<ol className="border border-foreground divide-y divide-foreground my-3">
				{projects
					.filter((project) => !project.featured_project)
					.map((project) => (
						<ProjectCard
							key={project.id}
							name={project.name}
							type={project.type}
							year={project.year}
							slug={project.slug}
							image={project.image}
						/>
					))}
			</ol>
		</div>
	);
}
