import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/navigation";
import { currentStatus, statusMap } from "@/constants/status";
import logo from "@/public/icons/logo.svg";
import Hamburger from "./Hamburger";

export default function Navbar() {
	const status = statusMap[currentStatus];

	return (
		<nav className="sticky top-0 left-0 right-0 z-50 font-family-mono mx-auto flex items-center justify-between px-3 lg:px-25 py-4 bg-white">
			{/* Logo */}
			<div className="hidden md:flex">
				<Image src={logo} alt="JP Logo" width={40} height={40} />
			</div>

			<div className="hidden md:flex font-medium gap-8">
				{navLinks.map((link) => (
					<Link key={link.name} href={link.href}>
						{">"} {link.name}
					</Link>
				))}
			</div>

			<Hamburger />

			<div className="flex items-center gap-2">
				<span className={`size-2.5 rounded-full ${status.color}`} />
				<span>{status.label}</span>
			</div>
		</nav>
	);
}
