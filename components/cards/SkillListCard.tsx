interface SkillListCardProps {
	category: string;
	skills: {
		icon: React.ElementType;
		name: string;
	}[];
}

export default function SkillListCard({
	category,
	skills,
}: SkillListCardProps) {
	return (
		<div>
			<h2>{category}</h2>
			<div className="flex gap-2 border border-foreground p-4 w-full h-auto">
				{skills.map((skill) => (
					<div key={skill.name} className="flex items-center gap-1">
						<skill.icon />
						<p>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
