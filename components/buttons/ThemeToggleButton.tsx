"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	// Prevent rendering icons on the server to avoid the mismatch
	if (!mounted) {
		return (
			<button
				type="button"
				aria-label="Toggle theme"
				className="flex items-center gap-2 rounded-full px-3 py-2 opacity-50 cursor-not-allowed"
				disabled
			>
				<div className="w-4.5 h-4.5" />
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="flex items-center gap-2 rounded-full px-3 py-3 transition hover:bg-foreground hover:text-background ease-in-out duration-500"
		>
			{resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
}
