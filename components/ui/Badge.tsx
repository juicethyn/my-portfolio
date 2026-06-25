interface BadgeProps {
	text: string;
	size?: "small" | "medium" | "large";
}

export default function Badge({ text, size = "medium" }: BadgeProps) {
	const sizeClasses = {
		small: "text-xs px-3 py-1",
		medium: "text-base px-6 py-2",
		large: "text-xs lg:text-base px-3 py-1 lg:px-6 lg:py-2",
	};

	return (
		<p
			className={`inline-block ${sizeClasses[size]} border border-foreground rounded-full hover:border-accent hover:text-accent transition-colors ease-in-out duration-200`}
		>
			{text}
		</p>
	);
}
