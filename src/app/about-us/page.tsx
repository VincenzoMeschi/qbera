import { LowImpactHeader } from "@/Header/LowImpact/Component";
import { AboutUs } from "@/sections/AboutSection/Component";
import {
	aboutUsData,
	giantCTAData,
	heroData,
	testimonialData,
	ctaData,
} from "@/data/about/data";
import { logoSliderData } from "@/data/global/data";
import { LogoSlider } from "@/components/LogoSlider/Component";
import { Footer } from "@/Footer/Component";
import { footerData, coachesData } from "@/data/global/data";
import { CoachesSection } from "@/sections/CoachesSection/Component";
import { GiantCTASection } from "@/sections/GiantCTASection/Component";
import { TestimonialSection } from "@/sections/TestimonialSection/Component";
import { CTASection } from "@/sections/CTASection/Component";

export default function About() {
	return (
		<div className="flex flex-col gap-24 overflow-hidden">
			<LowImpactHeader {...heroData}></LowImpactHeader>
			<AboutUs {...aboutUsData} />
			<LogoSlider {...logoSliderData} />
			<CoachesSection {...coachesData} />
			<GiantCTASection {...giantCTAData} />
			<TestimonialSection {...testimonialData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
