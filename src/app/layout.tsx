import type { Metadata } from "next";
import { Roboto, Anton } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

import PlausibleProvider from "next-plausible";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const anton = Anton({
	variable: "--font-anton",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "QB Era | Best Quarterback and Wide Receiver Training in Chicago",
	description:
		"Quarterback and Wide Receiver Training Academy based in Chicago, Illinois, and Dallas, Texas. Take your training to the next level. Welcome to the new era of quarterback training.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="AW-17332557195" />
			<PlausibleProvider domain="qb-era.com">
				<body
					className={`${roboto.variable} ${anton.variable} antialiased`}>
					{children}
				</body>
			</PlausibleProvider>
		</html>
	);
}
