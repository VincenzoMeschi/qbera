"use client";

import React, { useEffect, useRef } from "react";
import { MainGrid } from "../MainGrid/Component";

export const ChicagoBooking: React.FC = () => {
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
				<div
					ref={widgetRef}
					className="mindbody-widget col-span-4 sm:col-span-6 lg:col-span-12 rounded-[2.5rem] overflow-hidden"
					data-widget-type="Schedules"
					data-widget-id="59236824b5e"></div>
			</MainGrid>
		</div>
	);
};
