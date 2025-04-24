import { SvgIconComponent } from "@mui/icons-material";
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
			icon: SvgIconComponent;
			url: URL | string;
		};
	};
} & React.HTMLAttributes<HTMLDivElement>;
