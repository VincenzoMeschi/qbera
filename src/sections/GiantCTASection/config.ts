import { IconComponent } from "@/components/Icons/Component";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type GiantCTASectionProps = {
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	mainHeading: string;
	ctaButton: {
		label: string;
		icon: IconComponent;
		url: URL | string;
	};
};
