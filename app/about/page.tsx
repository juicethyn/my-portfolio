import AboutSection from "@/components/sections/AboutSection";

export default async function About() {
	await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay of 0.5 seconds

	return <AboutSection />;
}
