import { Footer } from "@/Footer/Component";
import { LowImpactHeader } from "@/Header/LowImpact/Component";
import { LogoSlider } from "@/components/LogoSlider/Component";
import { coachesData, footerData, logoSliderData } from "@/data/global/data";

import { heroData, locationData, ctaData } from "@/data/locations/data";
import { CTASection } from "@/sections/CTASection/Component";
import { CoachesSection } from "@/sections/CoachesSection/Component";
import { LocationSection } from "@/sections/LocationSection/Component";

export default function Locations() {
	return (
		<div className="flex flex-col gap-24 overflow-hidden">
			<LowImpactHeader {...heroData}></LowImpactHeader>
			<LocationSection {...locationData} />
			<LogoSlider {...logoSliderData} />
			<CoachesSection {...coachesData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
