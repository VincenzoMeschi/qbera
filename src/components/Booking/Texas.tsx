"use client";

import React, { useEffect, useRef } from "react";
import { MainGrid } from "../MainGrid/Component";
import Image from "next/image";

export const TexasBooking: React.FC = () => {
	const widgetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const script = document.createElement("script");
		script.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
		script.async = true;
		if (widgetRef.current) {
			widgetRef.current.innerHTML = ""; // Clear any SSR mismatch
			widgetRef.current.appendChild(script);
		}
	}, []);

	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="col-span-full flex items-center justify-center gap-20">
					<a href="https://apps.apple.com/us/app/qb-era/id6745488226">
						<Image
							src="https://res.cloudinary.com/dbxthl3yh/image/upload/v1746574928/Download_on_the_App_Store_RGB_blk.svg_zfgbfx.png"
							alt="Download on App Store"
							width={305}
							height={105}
							className="col-span-2 sm:col-span-3 lg:col-span-6 w-36 lg:w-48"
						/>
					</a>
				</div>
				<div
					ref={widgetRef}
					className="mindbody-widget col-span-4 sm:col-span-6 lg:col-span-12 rounded-[2.5rem] overflow-hidden"
					data-widget-type="Schedules"
					data-widget-id="59236824b5e"></div>
			</MainGrid>
		</div>
	);
};
