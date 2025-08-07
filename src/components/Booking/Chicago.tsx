"use client";

import React, { useEffect, useRef } from "react";
import { MainGrid } from "../MainGrid/Component";
import Image from "next/image";

export const ChicagoBooking: React.FC = () => {
	const scheduleRef = useRef<HTMLDivElement>(null);
	const singleRef = useRef<HTMLDivElement>(null);
	const fiveRef = useRef<HTMLDivElement>(null);
	const tenRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		// schedules script
		if (scheduleRef.current) {
			scheduleRef.current.innerHTML = "";
			const s = document.createElement("script");
			s.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
			s.async = true;
			scheduleRef.current.appendChild(s);
		}

		const inject = (
			container: HTMLDivElement,
			serviceId: string,
			text: string,
			url: string
		) => {
			container.innerHTML = "";
			const hc = document.createElement("a");
			hc.href = url;
			hc.className =
				"healcode-link healcode-pricing-option-text-link block w-full h-full flex items-center justify-center";
			hc.dataset.url = url;
			hc.dataset.widgetName = "pricing-link";
			hc.dataset.mboSiteId = "5744830";
			hc.dataset.serviceId = serviceId;
			hc.dataset.bwIdentitySite = "true";
			hc.rev = "iframe";
			hc.title = serviceId;
			hc.dataset.hcOpenModal = "modal-iframe";
			hc.innerText = text;
			container.appendChild(hc);

			const sc = document.createElement("script");
			sc.src =
				"https://widgets.mindbodyonline.com/javascripts/healcode.js";
			sc.async = true;
			container.appendChild(sc);
		};

		if (singleRef.current) {
			inject(
				singleRef.current,
				"100002",
				"Buy Now – Single",
				"https://cart.mindbodyonline.com/sites/126307/cart/add_service?mbo_item_id=100002"
			);
		}
		if (fiveRef.current) {
			inject(
				fiveRef.current,
				"100007",
				"Buy Now – 5 Pack",
				"https://cart.mindbodyonline.com/sites/126307/cart/add_service?mbo_item_id=100007"
			);
		}
		if (tenRef.current) {
			inject(
				tenRef.current,
				"100008",
				"Buy Now – 10 Pack",
				"https://cart.mindbodyonline.com/sites/126307/cart/add_service?mbo_item_id=100008"
			);
		}
	}, []);

	const pricingClasses =
		"col-span-4 sm:col-span-6 lg:col-span-4 mt-4 " +
		"flex items-center justify-center " +
		"bg-white border-2 border-primary font-bold " +
		"hover:bg-secondary transition-colors duration-200 h-18";

	return (
		<div className="w-full h-full">
			<MainGrid>
				<div ref={singleRef} className={pricingClasses} />
				<div ref={fiveRef} className={pricingClasses} />
				<div ref={tenRef} className={pricingClasses} />

				<div className="col-span-full flex items-center justify-center gap-14">
					<a href="https://apps.apple.com/us/app/qb-era/id6745488226">
						<Image
							src="https://res.cloudinary.com/dbxthl3yh/image/upload/v1746574928/Download_on_the_App_Store_RGB_blk.svg_zfgbfx.png"
							alt="Download on App Store"
							width={305}
							height={105}
							className="col-span-2 sm:col-span-3 lg:col-span-6 w-36 lg:w-48"
						/>
					</a>
					<a href="https://play.google.com/store/apps/details?id=com.fitnessmobileapps.qberallc41844&pcampaignid=web_share&pli=1">
						<Image
							src="https://res.cloudinary.com/dbxthl3yh/image/upload/v1748809820/Google_Play_Store_badge_EN.svg_bx9upb.png"
							alt="Download on Google Play Store"
							width={305}
							height={105}
							className="col-span-2 sm:col-span-3 lg:col-span-6 w-36 lg:w-48"
						/>
					</a>
				</div>
				{/* android: {
					image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1748809820/Google_Play_Store_badge_EN.svg_bx9upb.png",
					url: "https://play.google.com/store/apps/details?id=com.fitnessmobileapps.qberallc41844&pcampaignid=web_share&pli=1",
				}, */}

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
