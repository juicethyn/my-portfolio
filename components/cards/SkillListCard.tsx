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
			<h2 className="text-base lg:text-lg font-semibold my-2">{category}</h2>
			<div className="grid grid-cols-3 grid-rows-2 border border-foreground p-3 w-full">
				{skills.map((skill) => (
					<div
						key={skill.name}
						className="flex items-center gap-2 text-xs lg:text-sm"
					>
						<skill.icon className="size-6" />
						<p>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
