import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Header } from "./header";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Agrivest Africa",
	description: "Generated by create next app",
	icons: "/images/logo.png",
	keywords: ["agriculture", "africa", "ghana", "farming", "crowdfund"]
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable
			)}>
				<nav>
					<Header />
				</nav>
				
				{children}

				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
