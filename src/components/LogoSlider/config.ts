import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type LogoSliderProps = {
	logos: {
		image: StaticImport | string;
		alt: string;
		/** Optional per-logo classes, e.g. to nudge wide wordmarks. */
		className?: string;
	}[];
};
