interface ProjectCardProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectsPage({ params }: ProjectCardProps) {
	const { slug } = await params;

	return (
		<div className="container mx-auto px-4 py-8">
			Hello World This is the {slug} project page.
		</div>
	);
}
