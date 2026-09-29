import { HighImpactHeader } from "@/Header/HighImpact/Component";
import { AboutUs } from "@/sections/AboutSection/Component";
import {
	aboutUsData,
	heroData,
	testimonialData,
	ctaData,
} from "@/data/home/data";
import { logoSliderData } from "@/data/global/data";
import { LogoSlider } from "@/components/LogoSlider/Component";
import { TestimonialSection } from "@/sections/TestimonialSection/Component";
import { CTASection } from "@/sections/CTASection/Component";
import { Footer } from "@/Footer/Component";
import { footerData } from "@/data/global/data";
import Script from "next/script";

export default function Home() {
	return (
		<div className="flex flex-col gap-24 overflow-hidden">
			{/* Attentive newsletter/SMS sign-up tag */}
			<Script
				id="attentive-dtag"
				src="https://cdn.attn.tv/qberll/dtag.js"
				strategy="afterInteractive"
			/>
			<HighImpactHeader {...heroData}></HighImpactHeader>
			<AboutUs {...aboutUsData} />
			<LogoSlider {...logoSliderData} />
			<TestimonialSection {...testimonialData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
