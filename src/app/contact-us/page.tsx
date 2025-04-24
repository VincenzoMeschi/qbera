import { LowImpactHeader } from "@/Header/LowImpact/Component";
import { contactSectionData, heroData, ctaData } from "@/data/contact/data";
import { Footer } from "@/Footer/Component";
import { footerData, logoSliderData } from "@/data/global/data";
import { ContactSection } from "@/sections/ContactSection/Component";
import { LogoSlider } from "@/components/LogoSlider/Component";
import { CTASection } from "@/sections/CTASection/Component";

export default function About() {
	return (
		<div className="flex flex-col gap-24 overflow-x-hidden">
			<LowImpactHeader {...heroData}></LowImpactHeader>
			<ContactSection {...contactSectionData} />
			<LogoSlider {...logoSliderData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
