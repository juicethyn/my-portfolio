interface ExperiencesCardProps {
	company: string;
	position: string;
	duration: string;
	description: string;
	id: number;
}

export default function ExperiencesCard({
	company,
	position,
	duration,
	description,
	id,
}: ExperiencesCardProps) {
	return (
		<div className="border border-foreground p-3 w-full">
			<div className="flex items-center justify-between border-b border-foreground pb-2">
				<div className="flex gap-2">
					<div className="w-3 h-3 border border-foreground bg-accent rounded-full" />
					<div className="w-3 h-3 border border-foreground bg-accent rounded-full" />
					<div className="w-3 h-3 border border-foreground bg-accent rounded-full" />
				</div>

				<div className="flex gap-3 font-mono text-xl">
					<span>—</span>
					<span>□</span>
					<span>×</span>
				</div>
			</div>

			<div className="block lg:flex justify-between mt-2">
				<div>
					<h2 className="md:text-base lg:text-lg font-semibold">{`(0${id}) ${company}`}</h2>
					<p className="text-xs lg:text-sm">{position}</p>
				</div>
				<p className="text-xs lg:text-sm">{duration}</p>
			</div>
			<br />
			<h1 className="text-base lg:text-lg">{description}</h1>
		</div>
	);
}
