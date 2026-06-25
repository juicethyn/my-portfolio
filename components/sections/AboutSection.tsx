import EducationCard from "@/components/cards/EducationCard";
import SkillListCard from "@/components/cards/SkillListCard";
import Badge from "@/components/ui/Badge";
import { education } from "@/constants/education";
import { focus } from "@/constants/focus";
import { skills } from "@/constants/skills";

export default function AboutSection() {
	return (
		<section className="text-foreground my-3">
			<div className="lg:flex justify-between items-center">
				<h1 className="text-3xl lg:text-6xl font-medium">{`./about`}</h1>
				<p className="text-start lg:text-end text-xs lg:text-base">
					{`> Identity, background, and the`}
					<br className="hidden md:block" />
					{`story behind my code.`}
				</p>
			</div>
			<div className="lg:flex justify-between gap-3 mt-3">
				<div className="flex-1 text-center lg:text-start text-xs lg:text-xl xl:text-2xl leading-relaxed">
					<h2>
						I'm <b>Juzzthyn</b>, a Software Engineer who enjoys building things
						from the ground up. Whether it's a web application, mobile app, or
						AI-driven project, I find the most satisfaction in turning ideas
						into products that people can use.
					</h2>
					<br />
					<h2>
						I enjoy the journey of building software as much as the final
						product. There is something rewarding about starting with an idea,
						working through countless challenges and iterations, and eventually
						seeing something become a usable product that can create value for
						people.
					</h2>
				</div>

				<div className="flex-1">
					<h2 className="text-lg lg:text-xl font-semibold mb-2 mt-3 lg:mt-0 text-center lg:text-start">
						developer_profile
					</h2>
					<h2 className="text-base lg:text-lg font-semibold">education</h2>
					{/* Render EducationCard for each education entry */}
					{education.map((edu) => (
						<EducationCard
							key={edu.institution}
							degree={edu.degree}
							institution={edu.institution}
							startDate={edu.startDate}
							endDate={edu.endDate}
						/>
					))}
					<hr className="my-3 border-t border-foreground" /> {/* Divider */}
					<h2 className="text-base lg:text-lg font-semibold">currently</h2>
					<p className="text-xs lg:text-base my-2">
						A <b>Software Engineer Intern</b> at Stratpoint Technologies.
					</p>
					<hr className="my-3 border-t border-foreground" /> {/* Divider */}
					<h2 className="text-lg font-semibold">focus</h2>
					<div className="flex flex-wrap gap-2 my-2 justify-center lg:justify-start">
						{focus.map((item) => (
							<Badge key={item} text={item} size="large" />
						))}
					</div>
				</div>
			</div>
			<hr className="my-3 border-t border-foreground" /> {/* Divider */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
				<SkillListCard category="frontend" skills={skills.frontend} />
				<SkillListCard category="backend" skills={skills.backend} />
				<SkillListCard category="ui/ux design" skills={skills.uiux_design} />
				<SkillListCard category="tools" skills={skills.tools} />
			</div>
		</section>
	);
}
