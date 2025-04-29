"use client";

import React, { useState } from "react";
import { MainGrid } from "../MainGrid/Component";
import { Menu, Close } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export const Nav: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [animating, setAnimating] = useState(false);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about-us", label: "About" },
		{ href: "/locations", label: "Locations" },
		{ href: "/training", label: "Training" },
		{ href: "/contact-us", label: "Contact" },
	];

	const openMenu = () => {
		setMobileOpen(true);
		setTimeout(() => setAnimating(true), 10);
	};

	const closeMenu = () => {
		setAnimating(false);
		setTimeout(() => setMobileOpen(false), 300);
	};

	return (
		<div className="absolute top-0 w-full z-9999">
			<MainGrid className="pt-6 z-50">
				<nav className="contents w-full text-secondary">
					<Image
						src="/QB_Era_White.png"
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
						onClick={openMenu}>
						<Menu />
					</button>
				</nav>
			</MainGrid>

			{/* Overlay */}
			{mobileOpen && (
				<div
					className={clsx(
						"fixed inset-0 bg-black z-40 transition-opacity duration-300",
						animating ? "opacity-60" : "opacity-0"
					)}
					onClick={closeMenu}
				/>
			)}

			{/* sliding panel */}
			{mobileOpen && (
				<div
					className={clsx(
						"fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-999 p-4 transition-transform duration-300 ease-in-out",
						animating ? "translate-x-0" : "translate-x-full"
					)}>
					{/* close button */}
					<div className="flex justify-end">
						<button onClick={closeMenu}>
							<Close />
						</button>
					</div>

					{/* mobile nav links */}
					<ul className="flex flex-col mt-6 uppercase">
						{navItems.map(({ href, label }) => (
							<li
								key={href}
								className="border-b border-gray-200 py-4">
								<Link href={href} onClick={closeMenu}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
