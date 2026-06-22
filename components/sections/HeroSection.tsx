import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants/socials";
import profile from "@/public/images/profile.png";

export default function HeroSection() {
    return (
        <section>
            <div className="flex justify-between font-family-sans mt-3 text-xs md:text-sm lg:text-base">
                <p>{`// Juzzthyn Perez`}</p>
                <p>{`// Parañaque City`}</p>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-6">
                <div className="text-center lg:text-start">
                    <h3 className="font-family-mono font-normal text-[16px] lg:text-2xl">Aspiring</h3>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] mb-4">Software Engineer</h1>
                    <p className="font-family-mono font-normal text-sm lg:text-lg">I love building complex, analysis-drive projects and developing full-stack web and mobile applications.</p>
                    <ul className="flex flex-row gap-4 mt-4 justify-center lg:justify-start">
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                    <link.icon className="size-8 lg:size-10" color="var(--accent)"/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative lg:w-287.5 h-auto mt-6 lg:mt-0">
                    <Image src={profile}
                    alt="Profile Image"
                    className="object-cover object-center mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]"
                    />
                </div>    
            </div>
      </section>
    )
}