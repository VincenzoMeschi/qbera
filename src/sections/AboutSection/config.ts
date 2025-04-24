import { SvgIconComponent } from "@mui/icons-material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

export type AboutUsProps = (
	| {
			isHomePage: true;
			leftSide: {
				imageSettings: {
					image: StaticImport | string;
					alt: string;
					imagePositionOverride?: [number, number];
				};
				mainHeading: string;
				subText: string;
				ctaButton?: {
					label: string;
					icon: SvgIconComponent;
					url: string;
				};
			};
			rightSide: {
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
			};
	  }
	| {
			isHomePage: false;
			leftSide: {
				mainHeading: string;
				subText: string;
				ctaButton?: {
					label: string;
					icon: SvgIconComponent;
					url: string;
				};
			};
			rightSide: {
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
			};
	  }
) &
	React.HTMLAttributes<HTMLDivElement>;
