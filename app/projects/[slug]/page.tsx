import Image from "next/image";
import { notFound } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getProjectBySlug } from "@/constants/projects";

interface ProjectCardProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectsPage({ params }: ProjectCardProps) {
	const { slug } = await params;

	const project = await getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<section>
			<div className="w-full max-w-5xl mx-auto">
				<p className="text-center"> {project.period} </p>
				<AspectRatio
					ratio={16 / 9}
					className="rounded-lg bg-muted overflow-hidden my-4"
				>
					<Image
						src={project.image}
						alt={project.name}
						fill
						className="w-full object-cover"
					/>
				</AspectRatio>
				<div>
					<div className="flex justify-between items-center">
						<h1 className="text-5xl font-bold">{project.name}</h1>
						<p className="text-lg font-light">{project.type}</p>
					</div>

					<p className="my-3 text-base">{project.description}</p>

					<div className="my-3">
						<h2 className="text-2xl font-bold">role</h2>
						<p className="text-base">{project.role_description}</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-3">
						<div>
							<h2 className="text-2xl font-bold">tools_used</h2>
							<ul>
								{project.technologies.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold">project_type</h2>
							<p>{project.type}</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold">sourcecode</h2>
							<ul>
								<p>Github</p>
								<p>LinkedIn</p>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
