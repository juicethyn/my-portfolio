interface BadgeProps {
	text: string;
}

export default function Badge({ text }: BadgeProps) {
	return (
		<p className="inline-block text-xs lg:text-base px-3 py-1 lg:px-6 lg:py-2 border border-foreground rounded-full hover:border-accent hover:text-accent transition-colors ease-in-out duration-200">
			{text}
		</p>
	);
}
