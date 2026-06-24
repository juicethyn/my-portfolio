import ExperiencesCard from "@/components/cards/ExperiencesCard";
import { experiences } from "@/constants/experiences";

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

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 my-3">
				{experiences.map((exp) => (
					<ExperiencesCard
						key={exp.id}
						id={exp.id}
						company={exp.company}
						position={exp.position}
						duration={exp.duration}
						description={exp.description}
					/>
				))}
			</div>
		</section>
	);
}
