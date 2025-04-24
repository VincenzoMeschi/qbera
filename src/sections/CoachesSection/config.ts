import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CoachesSectionProps = {
	coach: {
		imageSettings: {
			image: StaticImport | string;
			alt: string;
			imagePositionOverride?: [number, number];
		};
		mainHeading: string;
		subText: string;
	}[];
};
