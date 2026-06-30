import ExperiencesGrid from "@/components/ui/ExperiencesGrid";

export default function ExperiencesSection() {
	return (
		<section className="text-foreground my-3">
			<div className="lg:flex justify-between items-center">
				<p className="hidden lg:block text-start lg:text-start text-xs lg:text-base">
					{`> My journey, milestone, and`}
					<br className="hidden md:block" />
					{`professional growth.`}
				</p>
				<h1 className="text-3xl text-end lg:text-6xl font-medium">{`./experiences`}</h1>
				<p className="block lg:hidden text-start lg:text-start text-xs lg:text-base">
					{`> My journey, milestone, and`}
					<br className="hidden md:block" />
					{`professional growth.`}
				</p>
			</div>

			<ExperiencesGrid />
		</section>
	);
}
