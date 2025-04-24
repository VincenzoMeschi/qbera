import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type LowImpactHeaderProps = {
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	mainHeading: string;
} & React.HTMLAttributes<HTMLDivElement>;
