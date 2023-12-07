"use client";
import localFont from "next/font/local";

import "./nav.css";
const blackoutmidnight = localFont({
	src: "../../public/fonts/Blackout-Midnight.ttf",
	display: "swap",
	variable: "--font-blackoutmidnight"
});

import React, { useState } from "react";
import Image from "next/image";
import HamburgerIcon from "@/components/HamburgerIcon";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className={"nav-main "}>
			<div
				className={[
					"navcontainer",
					blackoutmidnight.className,
					navOpen ? "navtextopen" : ""
				].join(" ")}
			>
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
					active={navOpen}
					height={20}
					onclick={() => {
						setNavOpen(!navOpen);
					}}
				/>
			</div>
			{navOpen && (
				<div
					className="nav-lower"
					onClick={() => {
						setNavOpen(!navOpen);
					}}
				></div>
			)}
		</div>
	);
}
