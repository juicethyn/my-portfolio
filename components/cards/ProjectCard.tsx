"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Badge from "../ui/Badge";

interface ProjectCardProps {
	name: string;
	type: string;
	year: number;
	slug: string;
	image: string;
	technologies?: string[];
}

export default function ProjectCard({
	name,
	type,
	year,
	slug,
	image,
	technologies = [],
}: ProjectCardProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const [hoveredProject, setHoveredProject] = useState<boolean>(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
		>
			<Link
				href={`/projects/${slug}`}
				onMouseEnter={() => setHoveredProject(true)}
				onMouseLeave={() => setHoveredProject(false)}
				onMouseMove={handleMouseMove}
				className="grid grid-cols-2 lg:grid-cols-4 text-center text-xs lg:text-base font-normal py-6"
			>
				<p>{name}</p>
				<p className="hidden lg:block">{type}</p>
				<div className="hidden lg:flex gap-2 justify-center items-center">
					{technologies.slice(0, 3).map((tech) => (
						<Badge key={tech} text={tech} size="small" />
					))}
				</div>
				<p>{year}</p>
				{hoveredProject && (
					<div
						className="hidden lg:block fixed aspect-video-16/9 pointer-events-auto z-50 bg-white text-black rounded-lg shadow-lg"
						style={{ top: mousePosition.y - 120, left: mousePosition.x + 20 }}
					>
						<Image
							src={image}
							alt={name}
							width={200}
							height={125}
							className="object-cover"
						/>
					</div>
				)}
			</Link>
		</motion.div>
	);
}
