import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TestimonialCardProps = {
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	logoSettings: {
		logo: StaticImport | string;
		alt: string;
		logoPositionOverride?: [number, number];
	};
	playerName: string;
	affiliation: string;
	quote: string;
} & React.HTMLAttributes<HTMLDivElement>;
