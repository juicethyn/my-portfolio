import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Badge from "@/components/ui/Badge";

interface ProjectDetails {
	image: string;
	name: string;
	period?: string;
	type?: string;
	description?: string;
	role_description?: string;
	technologies: string[];
	project_type?: string;
	sourcecode?: { id: number; name: string; url: string }[];
}

export default function ProjectDetails({
	project,
}: {
	project: ProjectDetails;
}) {
	return (
		<div className="w-full max-w-5xl mx-auto">
			<p className="text-center"> {project.period} </p>
			<AspectRatio
				ratio={16 / 9}
				className="rounded-lg bg-muted overflow-hidden my-1 lg:my-4"
			>
				<Image
					src={project.image}
					alt={project.name}
					fill
					className="w-full object-cover"
				/>
			</AspectRatio>

			<div>
				<div className="block lg:flex justify-between items-center my-3 lg:my-0">
					<h1 className="text-5xl lg:text-5xl font-bold">{project.name}</h1>
					<p className="text-base lg:text-lg font-light">{project.type}</p>
				</div>
				<p className="my-3 text-sm lg:text-base">{project.description}</p>
				<hr className="my-3 border-t border-foreground" /> {/* Divider */}
				<div className="my-3">
					<h2 className="text-xl lg:text-2xl font-bold">role</h2>
					<p className="text-sm lg:text-base">{project.role_description}</p>
				</div>
				<hr className="my-3 border-t border-foreground" /> {/* Divider */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-3 my-1 lg:my-3">
					<div>
						<h2 className="text-xl lg:text-2xl font-bold">tools_used</h2>
						<ul className="flex flex-wrap gap-2 my-2">
							{project.technologies.map((tech) => (
								<Badge key={tech} size="small" text={tech} />
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-xl lg:text-2xl font-bold">project_type</h2>
						<p className="text-sm lg:text-base my-2">{project.project_type}</p>
					</div>

					<div>
						<h2 className="text-xl lg:text-2xl font-bold">sourcecode</h2>
						<ul className="flex flex-wrap gap-2 my-2">
							{project.sourcecode?.map((source) => (
								<Link
									key={source.id}
									href={source.url}
									target="_blank"
									rel="noopener noreferrer"
									className="
                    inline-flex items-center gap-2
                    border border-foreground rounded-full
                    px-10 py-2
                    font-family-mono
                    transition-all duration-300
                    bg-foreground
                    text-background
                    hover:bg-background
                    hover:text-accent
                    hover:border-accent
                    "
								>
									{source.name}
								</Link>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
