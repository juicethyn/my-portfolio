"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants/socials";
import profile from "@/public/images/profile.png";

export default function HomeSection() {
	return (
		<section>
			<div className="flex justify-between font-family-sans my-3 text-xs md:text-sm lg:text-base">
				<p>{`// Juzzthyn Perez`}</p>
				<p>{`// Parañaque City`}</p>
			</div>

			<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-6">
				<motion.div
					className="text-center lg:text-start"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
					viewport={{ once: false }}
				>
					<h3 className="font-family-mono font-normal text-accent text-[16px] lg:text-2xl">
						Aspiring
					</h3>
					<h1 className="text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] mb-4">
						Software Engineer
					</h1>
					<p className="font-family-mono font-normal text-sm lg:text-lg">
						I love building complex, analysis-driven projects and developing
						full-stack web and mobile applications.
					</p>
					<ul className="flex flex-row gap-4 mt-4 justify-center lg:justify-start">
						{socialLinks.map((link) => (
							<motion.li
								key={link.name}
								whileHover={{ scale: 1.2 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Link
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<link.icon className="size-8 lg:size-10 text-accent" />
								</Link>
							</motion.li>
						))}
					</ul>
				</motion.div>

				<motion.div
					className="relative lg:w-287.5 h-auto mt-6 lg:mt-0"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
					whileHover={{ scale: 1.03 }}
					viewport={{ once: false }}
				>
					<Image
						src={profile}
						alt="Profile Image"
						className="object-cover object-center mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]"
					/>
				</motion.div>
			</div>
		</section>
	);
}
