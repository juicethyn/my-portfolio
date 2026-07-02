import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://juzzthynperez.vercel.app"),
	title: "Juzzthyn Perez | Software Engineer Portfolio",
	description: "Software Engineer Website Portfolio",
	openGraph: {
		title: "Juzzthyn Perez | Software Engineer Portfolio",
		description: "Software Engineer Website Portfolio",
		url: "",
		siteName: "Juzzthyn Perez | Software Engineer Portfolio",
		images: [
			{
				url: "/images/og-image.png",
				width: 1200,
				height: 630,
				alt: "Juzzthyn Perez Website Portfolio",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${space_grotesk.variable} ${jetbrains_mono.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<PageTransition>{children}</PageTransition>
				</ThemeProvider>
			</body>
		</html>
	);
}
