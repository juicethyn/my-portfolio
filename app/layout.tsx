import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, } from "next/font/google";
import "./globals.css";

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
  title: "Juzzthyn Perez - Software Engineer Portfolio",
  description: "Software Engineer Website Portfolio",
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
      >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
