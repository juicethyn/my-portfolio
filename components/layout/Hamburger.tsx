"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/constants/navigation";

export default function Hamburger() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<button
			type="button"
			onClick={() => setIsOpen(!isOpen)}
			className="md:hidden"
			aria-label="Toggle menu"
		>
			<Menu size={24} />

			<div
				className={`
            absolute left-0 top-full w-full bg-white text-center transition-all duration-300 ease-in-out overflow-hidden
            ${
							isOpen
								? "translate-y-0 opacity-100"
								: "-translate-y-4 opacity-0 pointer-events-none"
						}
            `}
			>
				{navLinks.map((link) => (
					<Link key={link.name} href={link.href} className="block py-2">
						{">"} {link.name}
					</Link>
				))}
			</div>
		</button>
	);
}
