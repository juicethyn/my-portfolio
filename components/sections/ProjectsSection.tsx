import getProjects from "../../constants/projects";
import FeaturedProjects from "../ui/FeaturedProjects";

export default async function ProjectsSection() {
	const projects = await getProjects();
	return (
		<section className="text-foreground my-3">
			<div className="lg:flex justify-between items-center">
				<h1 className="text-3xl lg:text-6xl font-medium">{`./projects`}</h1>
				<p className="text-start lg:text-end text-xs lg:text-base">
					{`> A collection of things I've build`}
					<br className="hidden md:block" />
					{`and experimented with.`}
				</p>
			</div>

			<div className="my-3 text-center">
				<h2 className="lg:text-3xl font-medium">selected_works</h2>
				<h3 className="lg:text-lg">{`> A curated collection of projects that best represent my skills, interest, and approach to software engineering.`}</h3>
			</div>

			{projects
				.filter((project) => project.featured_project)
				.map((project) => (
					<FeaturedProjects
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
		</section>
	);
}
