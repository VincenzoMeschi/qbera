import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type LogoSliderProps = {
	logos: {
		image: StaticImport | string;
		alt: string;
	}[];
};
