import { SvgIconComponent } from "@mui/icons-material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type HighImpactHeaderProps = {
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	mainHeading: string;
	subText: string;
	ctaButton: {
		label: string;
		icon: SvgIconComponent;
		url: URL | string;
	};
	circleTextDesignContent?: string;
} & React.HTMLAttributes<HTMLDivElement>;
