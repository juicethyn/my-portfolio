"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<motion.main
			className="font-family-mono mx-auto px-3 lg:px-25"
			key={pathname}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
		>
			{children}
		</motion.main>
	);
}
