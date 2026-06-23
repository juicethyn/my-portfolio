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
		<div className="flex justify-between my-2">
			<div>
				<p>{degree}</p>
				<p>{institution}</p>
			</div>
			<p className="text-sm text-end">
				{startDate}
				<br className="hidden md:block" />
				{`- ${endDate}`}
			</p>
		</div>
	);
}
