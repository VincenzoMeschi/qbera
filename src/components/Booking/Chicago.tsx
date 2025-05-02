"use client";

import React, { useEffect, useRef } from "react";
import { MainGrid } from "../MainGrid/Component";

export const ChicagoBooking: React.FC = () => {
	const scheduleRef = useRef<HTMLDivElement>(null);
	const singleRef = useRef<HTMLDivElement>(null);
	const fiveRef = useRef<HTMLDivElement>(null);
	const tenRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		if (scheduleRef.current) {
			scheduleRef.current.innerHTML = "";
			const sched = document.createElement("script");
			sched.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
			sched.async = true;
			scheduleRef.current.appendChild(sched);
		}

		const injectPricing = (
			container: HTMLDivElement,
			serviceId: string,
			innerHtml: string
		) => {
			container.innerHTML = "";
			const hc = document.createElement("healcode-widget");
			hc.setAttribute("data-version", "0.2");
			hc.setAttribute(
				"data-link-class",
				"healcode-pricing-option-text-link"
			);
			hc.setAttribute("data-site-id", "126307");
			hc.setAttribute("data-mb-site-id", "5744830");
			hc.setAttribute("data-service-id", serviceId);
			hc.setAttribute("data-bw-identity-site", "true");
			hc.setAttribute("data-type", "pricing-link");
			hc.setAttribute("data-inner-html", innerHtml);
			container.appendChild(hc);

			const script = document.createElement("script");
			script.src =
				"https://widgets.mindbodyonline.com/javascripts/healcode.js";
			script.async = true;
			container.appendChild(script);
		};

		if (singleRef.current) {
			injectPricing(
				singleRef.current,
				"100002",
				"Buy Now – Single Session"
			);
		}

		if (fiveRef.current) {
			injectPricing(fiveRef.current, "100007", "Buy Now – 5 Packages");
		}

		if (tenRef.current) {
			injectPricing(tenRef.current, "100008", "Buy Now – 10 Packages");
		}
	}, []);

	return (
		<div className="w-full h-full">
			<MainGrid>
				<div
					ref={singleRef}
					className="col-span-4 sm:col-span-6 lg:col-span-4 mt-4 flex items-center justify-center py-4 px-2 bg-white border-primary border-2 font-bold hover:bg-secondary transition-colors duration-200"
				/>

				<div
					ref={fiveRef}
					className="col-span-4 sm:col-span-6 lg:col-span-4 mt-4 flex items-center justify-center py-4 px-2 bg-white border-primary border-2 font-bold hover:bg-secondary transition-colors duration-200"
				/>

				<div
					ref={tenRef}
					className="col-span-4 sm:col-span-6 lg:col-span-4 mt-4 flex items-center justify-center py-4 px-2 bg-white border-primary border-2 font-bold hover:bg-secondary transition-colors duration-200"
				/>
				<div
					ref={scheduleRef}
					className="mindbody-widget col-span-4 sm:col-span-6 lg:col-span-12 rounded-[2.5rem] overflow-hidden"
					data-widget-type="Schedules"
					data-widget-id="59236824b5e"
				/>
			</MainGrid>
		</div>
	);
};
