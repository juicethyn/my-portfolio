import Image from "next/image";
import { currentStatus, statusMap } from "@/constants/status";
import logo from "@/public/icons/logo.svg";
import ThemeToggle from "../buttons/ThemeToggleButton";
import Hamburger from "./Hamburger";
import Navlist from "./Navlist";

export default function Navbar() {
	const status = statusMap[currentStatus];

	return (
		<nav className="sticky top-0 left-0 right-0 z-100 font-family-mono mx-auto flex items-center justify-between px-3 lg:px-25 py-4 bg-background">
			{/* Logo */}
			<div className="hidden md:flex w-auto h-auto">
				<Image src={logo} alt="JP Logo" width={40} height={40} />
			</div>

			<Navlist />

			<Hamburger />

			<div className="block md:flex items-center gap-4">
				<div className="hidden lg:flex items-center text-center justify-center gap-2">
					<span
						className={`size-1.5 lg:size-2.5 rounded-full ${status.color}`}
					/>
					<span className="text-base font-normal">{status.label}</span>
				</div>
				<ThemeToggle />
			</div>
		</nav>
	);
}
