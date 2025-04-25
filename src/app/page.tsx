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

export default function Home() {
	return (
		<div className="flex flex-col gap-24 overflow-hidden">
			<HighImpactHeader {...heroData}></HighImpactHeader>
			<AboutUs {...aboutUsData} />
			<LogoSlider {...logoSliderData} />
			<TestimonialSection {...testimonialData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
