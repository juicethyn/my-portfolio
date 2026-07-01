import Link from "next/link";
import ContactFormCard from "@/components/cards/ContactFormCard";

export default function ContactSection() {
	return (
		<section className="text-foreground my-3">
			<div className="lg:flex justify-between items-center">
				<p className="hidden lg:block text-start lg:text-start text-xs lg:text-base">
					{`> Ways to reach me and start a`}
					<br className="hidden md:block" />
					{`conversation.`}
				</p>
				<h1 className="text-3xl text-end lg:text-6xl font-medium">{`./contact`}</h1>
				<p className="block lg:hidden text-start lg:text-start text-xs lg:text-base">
					{`> Ways to reach me and start a`}
					<br className="hidden md:block" />
					{`conversation.`}
				</p>
			</div>

			{/* Contact Form Here */}
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 my-6">
				<div className="block lg:flex flex-col justify-center gap-8 my-3">
					<h1 className="text-5xl md:text-6xl lg:text-9xl font-bold">
						Let's <br className="hidden md:block" />
						Connect
					</h1>
					<div className="my-3">
						<p className="text-sm lg:text-2xl mb-2">
							Whether you have an opportunity, project idea, or simply want to
							chat, I'd be happy to hear from you.
						</p>
						<Link
							href="https://drive.google.com/file/d/1_vXVxidX7VjJxvynm45267h0nxZjtFz_/view?usp=sharing"
							target="_blank"
							className="
              inline-flex items-center gap-2
              border border-foreground
              px-5 py-3
              font-family-mono
              transition-all duration-300
              hover:bg-foreground
              hover:text-background
            "
						>
							<span>$</span>
							<span>download_resume</span>
						</Link>
					</div>
				</div>
				<ContactFormCard />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8 lg:my-6">
				<div>
					<p className="font-light">EMAIL</p>
					<p className="font-bold">juzzthynperez.personal@gmail.com</p>
				</div>
				<div>
					<p className="font-light">PHONE NUMBER</p>
					<p className="font-bold">+639500447192</p>
				</div>
				<div>
					<p className="font-light">LINKED</p>
					<Link
						href="https://linkedin.com/in/juzzthynperez"
						className="font-bold"
						target="_blank"
					>
						juzzthynperez
					</Link>
				</div>
				<div>
					<p className="font-light">GITHUB</p>
					<Link
						href="https://github.com/juicethyn"
						className="font-bold"
						target="_blank"
					>
						juicethyn
					</Link>
				</div>
			</div>
		</section>
	);
}
