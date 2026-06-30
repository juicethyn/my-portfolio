interface EducationCardProps {
	degree: string;
	institution: string;
	startDate: string;
	endDate: string;
}

export default function EducationCard({
	degree,
	institution,
	startDate,
	endDate,
}: EducationCardProps) {
	return (
		<div className="lg:flex justify-between items-center my-2">
			<div className="text-xs lg:text-base">
				<p>{degree}</p>
				<p>{institution}</p>
			</div>
			<p className="text-xs lg:text-sm lg:text-end">
				{startDate}
				<br className="hidden md:block" />
				{`- ${endDate}`}
			</p>
		</div>
	);
}
