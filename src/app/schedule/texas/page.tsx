"use client";
import { Footer } from "@/Footer/Component";
import { LowImpactHeader } from "@/Header/LowImpact/Component";
import { LogoSlider } from "@/components/LogoSlider/Component";
import { footerData, logoSliderData } from "@/data/global/data";
import { TexasBooking } from "@/components/Booking/Texas";

import { heroData, ctaData } from "@/data/schedule/chicago/data";
import { CTASection } from "@/sections/CTASection/Component";

export default function Locations() {
	return (
		<div className="flex flex-col gap-24 overflow-hidden">
			<LowImpactHeader {...heroData}></LowImpactHeader>
			<TexasBooking />
			<LogoSlider {...logoSliderData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
