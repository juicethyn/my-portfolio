import Image from "next/image";
import Link from "next/link";
import Badge from "../ui/Badge";

interface FeaturedProjectsCardProps {
	name: string;
	image: string;
	short_description: string;
	technologies: string[];
	type: string;
	period: string;
	featured_reverse: boolean;
	slug: string;
}

export default function FeaturedProjectsCard({
	name,
	image,
	short_description,
	technologies,
	type,
	period,
	featured_reverse,
	slug,
}: FeaturedProjectsCardProps) {
	return (
		<div
			className={`grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-90 xl:h-115 overflow-hidden rounded-lg gap-3 my-6`}
		>
			{/* Featured Image */}
			<div
				className={`relative h-48 lg:h-full ${featured_reverse ? "lg:order-2" : "lg:order-1"}`}
			>
				<Image
					src={image}
					alt={name}
					fill
					className="object-cover rounded-2xl"
				/>
			</div>

			{/* Featured Content */}
			<div
				className={`flex flex-col justify-center ${featured_reverse ? "lg:order-1" : "lg:order-2"}`}
			>
				<div className="flex justify-between text-xs lg:text-base">
					<p>{type}</p>
					<p>{period}</p>
				</div>

				<h2 className="text-3xl lg:text-6xl font-bold font-family-display">
					{name}
				</h2>

				<p className="text-xs lg:text-base text-justify">{short_description}</p>

				<ul className="flex flex-wrap gap-2 my-2">
					{technologies.map((tech) => (
						<Badge key={tech} text={tech} size="small" />
					))}
				</ul>

				<Link
					href={`/projects/${slug}`}
					className="w-full lg:w-60 text-base text-centerbg-accent text-background hover:text-accent px-5 py-3 rounded-full mt-2 hover:bg-transparent border hover:border-accent transition-colors duration-300"
				>
					View Project
				</Link>
			</div>
		</div>
	);
}
