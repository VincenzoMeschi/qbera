"use client";

import React, { useState } from "react";
import { MainGrid } from "../MainGrid/Component";
import { Menu, Close } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export const Nav: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about-us", label: "About" },
		{ href: "/locations", label: "Locations" },
		{ href: "/training", label: "Training" },
		{ href: "/contact-us", label: "Contact" },
	];

	return (
		<div className="absolute top-0 w-full z-30">
			<MainGrid className="pt-6 z-30">
				<nav className="contents w-full text-secondary">
					<Image
						src={"/qb_era_logo_white.png"}
						alt="QB Era Logo"
						width={125}
						height={38}
						priority
						className="col-span-2 lg:col-span-3"
					/>

					{/* desktop links */}
					<ul className="hidden sm:flex gap-12 w-full xl:col-start-9 lg:col-start-8 sm:col-start-3 justify-end col-span-full items-center uppercase pr-5">
						{navItems.map(({ href, label }) => (
							<li key={href}>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>

					{/* mobile menu button */}
					<button
						className="sm:hidden flex pr-6 self-center absolute right-0"
						onClick={() => setMobileOpen(true)}>
						<Menu />
					</button>
				</nav>
			</MainGrid>

			{/* sliding panel */}
			<div
				className={`
          !fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          sm:hidden !z-99
        `}>
				{/* close button */}
				<div className="flex justify-end p-4">
					<button onClick={() => setMobileOpen(false)}>
						<Close />
					</button>
				</div>

				{/* mobile nav links */}
				<ul className="flex flex-col p-4 uppercase">
					{navItems.map(({ href, label }) => (
						<li
							key={href}
							className="border-b-gray-300 border-b py-6 ">
							<Link
								href={href}
								onClick={() => setMobileOpen(false)}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
