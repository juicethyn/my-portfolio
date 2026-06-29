"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/constants/navigation";

export default function Hamburger() {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="relative z-90 md:hidden"
				aria-label="Toggle menu"
			>
				<Menu size={24} />
			</button>

			{/* Overlay */}
			<button
				type="button"
				aria-label="Close menu"
				onClick={closeMenu}
				className={`
					fixed top-20 bottom-0 left-0 right-0
					bg-black/50 z-40
					transition-opacity duration-300
					${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
				`}
			/>

			{/* Menu */}
			<div
				className={`
					absolute left-0 top-full w-full
					bg-background text-center
					z-50
					transition-all duration-300 ease-in-out
					overflow-hidden
					${
						isOpen
							? "translate-y-0 opacity-100"
							: "-translate-y-4 opacity-0 pointer-events-none"
					}
				`}
			>
				{navLinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						onClick={closeMenu}
						className="block py-3"
					>
						{">"} {link.name}
					</Link>
				))}
			</div>
		</>
	);
}
