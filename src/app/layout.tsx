import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
const blackoutmidnight = localFont({
	src: "../../public/fonts/Blackout-Midnight.ttf",
	display: "swap",
	variable: "--font-blackoutmidnight"
});
import "./globals.css";
import "./nav.css";
import React from "react";
import Image from "next/image";
import HamburgerIcon from "@/components/hamburger-icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mosaic Studios",
	description: "Mosaic Studios"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={blackoutmidnight.className}>
				<div className="navcontainer">
					<Image
						className="ufored"
						src={"/icons/ufo-red.svg"}
						alt={"ufo-red"}
						height={100}
						width={100}
					/>
					<ul className="navlinks">
						<li>Home</li>
						<li>About</li>
						<li>Projects</li>
						<li>Contacts</li>
					</ul>
					<HamburgerIcon
						active={false}
						height={24}
					/>
				</div>
				{children}
			</body>
		</html>
	);
}
