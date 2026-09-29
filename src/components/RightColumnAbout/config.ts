import { IconComponent } from "@/components/Icons/Component";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type RightColumnAboutProps = {
	top: {
		imageSettings: {
			image: StaticImport | string;
			alt: string;
			imagePositionOverride?: [number, number];
		};
		mainHeading: string;
		subText: string;
	};
	bottom: {
		imageSettings: {
			image: StaticImport | string;
			alt: string;
			imagePositionOverride?: [number, number];
		};
		mainHeading: string;
		subText: string;
		ctaButton: {
			icon: IconComponent;
			url: URL | string;
		};
	};
} & React.HTMLAttributes<HTMLDivElement>;
