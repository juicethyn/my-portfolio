import ProjectsSection from "@/components/sections/ProjectsSection";

export default async function Projects() {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	return <ProjectsSection />;
}
