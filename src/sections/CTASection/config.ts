import { SvgIconComponent } from "@mui/icons-material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CTASectionProps = {
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	mainHeading: string;
	ctaButton: {
		label: string;
		icon: SvgIconComponent;
		url: URL | string;
	};
};
