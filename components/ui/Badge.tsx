interface BadgeProps {
	text: string;
}

export default function Badge({ text }: BadgeProps) {
	return (
		<p className="inline-block px-6 py-2 border border-foreground rounded-full hover:border-accent hover:text-accent transition-colors ease-in-out duration-200">
			{text}
		</p>
	);
}
