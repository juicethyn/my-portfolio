import AboutSection from "@/components/sections/AboutSection";

export default async function About() {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	return <AboutSection />;
}
