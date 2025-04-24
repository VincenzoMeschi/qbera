import { FormProps } from "@/components/Form/config";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ContactSectionProps = {
	imageSettings: {
		image: StaticImport | string;
		alt: string;
		imagePositionOverride?: [number, number];
	};
	form: FormProps;
};
