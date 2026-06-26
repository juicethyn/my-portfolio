"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navigation";

export default function Navlist() {
	const pathname = usePathname();

	return (
		<div className="hidden md:flex font-medium gap-8">
			{navLinks.map((link) => (
				<Link
					key={link.name}
					href={link.href}
					className={`hover:text-accent ${pathname === link.href ? "text-accent" : ""}`}
				>
					{">"} {link.name}
				</Link>
			))}
		</div>
	);
}
