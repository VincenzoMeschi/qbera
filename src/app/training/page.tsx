import React from "react";

import { heroData, trainingData, ctaData } from "@/data/training/data";
import { LowImpactHeader } from "@/Header/LowImpact/Component";
import { footerData, logoSliderData } from "@/data/global/data";
import { Footer } from "@/Footer/Component";
import { TrainingSection } from "@/sections/TrainingSection/Component";
import { LogoSlider } from "@/components/LogoSlider/Component";
import { CTASection } from "@/sections/CTASection/Component";

export default function Training() {
	return (
		<div className="flex flex-col gap-24 overflow-x-hidden">
			<LowImpactHeader {...heroData}></LowImpactHeader>
			<TrainingSection {...trainingData} />
			<LogoSlider {...logoSliderData} />
			<CTASection {...ctaData} />
			<Footer {...footerData} />
		</div>
	);
}
