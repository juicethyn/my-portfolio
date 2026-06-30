"use client";

import { motion } from "motion/react";
import ExperiencesCard from "@/components/cards/ExperiencesCard";
import { experiences } from "@/constants/experiences";

export default function ExperiencesGrid() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 my-3">
			{experiences.map((exp) => (
				<motion.div
					key={exp.id}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: exp.id * 0.3,
					}}
					whileHover={{ scale: 1.02 }}
				>
					<ExperiencesCard
						id={exp.id}
						company={exp.company}
						position={exp.position}
						duration={exp.duration}
						description={exp.description}
					/>
				</motion.div>
			))}
		</div>
	);
}
