import { SvgIconComponent } from "@mui/icons-material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TrainingCardProps = {
	imagePosition: "left" | "right";
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	content: {
		mainHeading: string;
		subHeading: string;
		description: string;
		ctaButton: {
			label: string;
			icon: SvgIconComponent;
			url: URL | string;
		};
	};
};
