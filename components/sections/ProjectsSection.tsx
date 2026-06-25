import FeaturedProjects from "../ui/FeaturedProjects";
import OtherProjects from "../ui/OtherProjects";

export default function ProjectsSection() {
	return (
		<section className="text-foreground my-3">
			<div className="lg:flex justify-between items-center">
				<h1 className="text-3xl lg:text-6xl font-medium">{`./projects`}</h1>
				<p className="text-start lg:text-end text-xs lg:text-base">
					{`> A collection of things I've build`}
					<br className="hidden md:block" />
					{`and experimented with.`}
				</p>
			</div>

			<div className="my-3 text-center">
				<h2 className="text-xl lg:text-3xl font-medium">selected_works</h2>
				<h3 className="text-sm lg:text-lg">{`> A curated collection of projects that best represent my skills, interest, and approach to software engineering.`}</h3>
			</div>

			<FeaturedProjects />

			<div className="lg:flex justify-between items-center my-6">
				<h1 className="text-xl lg:text-3xl font-medium">other_works</h1>
				<p className="text-start lg:text-end text-xs lg:text-base">
					{`> Additional proejcts, experiments,`}
					<br className="hidden md:block" />
					{`and explorations.`}
				</p>
			</div>

			{/*other_works part content*/}
			<div>
				<div className="grid grid-cols-2 lg:grid-cols-4 text-center text-xs lg:text-base font-normal">
					<h3>Title</h3>
					<h3 className="hidden lg:block">Type</h3>
					<h3 className="hidden lg:block">Stack</h3>
					<h3>Year</h3>
				</div>
				{/*List of all Non-FeaturedProjects here */}
				<OtherProjects />
			</div>
		</section>
	);
}
