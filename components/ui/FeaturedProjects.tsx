import Image from "next/image";
import Badge from "../ui/Badge";

interface FeaturedProjectsProps {
	name: string;
	image: string;
	short_description: string;
	technologies: string[];
	type: string;
	period: string;
	featured_reverse: boolean;
}

export default function FeaturedProjects({
	name,
	image,
	short_description,
	technologies,
	type,
	period,
	featured_reverse,
}: FeaturedProjectsProps) {
	return (
		<div
			className={`grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-100 overflow-hidden rounded-lg gap-3`}
		>
			{/* Image */}
			<div
				className={`relative h-48 lg:h-full ${featured_reverse ? "lg:order-2" : "lg:order-1"}`}
			>
				<Image src={image} alt={name} fill className="object-cover" />
			</div>

			{/* Content */}
			<div
				className={`flex flex-col justify-center ${featured_reverse ? "lg:order-1" : "lg:order-2"}`}
			>
				<div className="flex justify-between">
					<p>{type}</p>
					<p>{period}</p>
				</div>

				<h2 className="text-6xl font-bold font-family-display">{name}</h2>

				<p>{short_description}</p>

				<ul className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<Badge key={tech} text={tech} size="small" />
					))}
				</ul>

				<button
					type="button"
					className="bg-foreground text-background px-4 py-2 rounded-lg mt-4 hover:bg-foreground/80 transition-colors duration-300"
				>
					View Project
				</button>
			</div>
		</div>
	);
}
