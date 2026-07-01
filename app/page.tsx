import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
	return (
		<>
			<HomeSection />
			<div className="h-10 lg:h-10" />
			<AboutSection />
			<div className="h-10 lg:h-20" />
			<ProjectsSection />
			<div className="h-10 lg:h-20" />
			<ExperiencesSection />
			<div className="h-10 lg:h-20" />
			<ContactSection />
		</>
	);
}
