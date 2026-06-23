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
		<div className="flex justify-between items-center my-2">
			<div className="text-[9px] lg:text-base">
				<p>{degree}</p>
				<p>{institution}</p>
			</div>
			<p className="text-[8px] lg:text-sm text-end">
				{startDate}
				<br className="hidden md:block" />
				{`- ${endDate}`}
			</p>
		</div>
	);
}
