"use client";

import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
	name: string;
	type: string;
	year: number;
	slug: string;
}

export default function ProjectCard({
	name,
	type,
	year,
	slug,
}: ProjectCardProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const [hoveredProject, setHoveredProject] = useState<boolean>(false);

	return (
		<Link
			href={`/projects/${slug}`}
			onMouseEnter={() => setHoveredProject(true)}
			onMouseLeave={() => setHoveredProject(false)}
			onMouseMove={handleMouseMove}
			className="grid grid-cols-2 lg:grid-cols-4 text-center text-xs lg:text-base font-normal py-6"
		>
			<p>{name}</p>
			<p className="hidden lg:block">{type}</p>
			<p className="hidden lg:block">Testing</p>
			<p>{year}</p>
			{hoveredProject && (
				<div
					className="fixed aspect-video-16/9 pointer-events-auto z-50 bg-white text-black p-2 rounded shadow-lg"
					style={{ top: mousePosition.y - 40, left: mousePosition.x + 20 }}
				>
					<h3 className="text-lg font-medium">{name}</h3>
					<p className="text-xs opacity-60">{type}</p>
				</div>
			)}
		</Link>
	);
}
