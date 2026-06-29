import Link from "next/link";

import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ui/ProjectDetails";
import { getProjectBySlug, getProjectNavigation } from "@/constants/projects";

interface ProjectCardProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectsPage({ params }: ProjectCardProps) {
	const { slug } = await params;

	const project = await getProjectBySlug(slug);

	const navigation = await getProjectNavigation(slug);

	if (!project) {
		notFound();
	}

	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<section>
			<div className="flex justify-between my-3">
				{navigation?.prev ? (
					<Link href={`/projects/${navigation.prev.slug}`}>
						← {navigation.prev.name}
					</Link>
				) : (
					<div />
				)}

				{navigation?.next ? (
					<Link href={`/projects/${navigation.next.slug}`}>
						{navigation.next.name} →
					</Link>
				) : (
					<div />
				)}
			</div>

			<ProjectDetails project={project} />
		</section>
	);
}
