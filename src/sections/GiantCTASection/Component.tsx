import React from "react";
import Link from "next/link";
import { GiantCTASectionProps } from "@/sections/GiantCTASection/config";
import { MainGrid } from "@/components/MainGrid/Component";
import Image from "next/image";

export const GiantCTASection: React.FC<GiantCTASectionProps> = ({
	imageSettings,
	mainHeading,
	ctaButton,
}) => {
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="col-span-4 sm:col-span-6 lg:col-span-12 rounded-[2.5rem] overflow-hidden relative h-[95vh] flex flex-col items-end justify-end">
					<h2 className="z-2 text-primary-foreground text-shadow-lg text-6xl lg:text-7xl lg:text-left text-right uppercase pb-5 pr-5">
						{mainHeading}
					</h2>
					<Link
						href={ctaButton.url}
						className="flex text-primary-foreground items-center cursor-pointer text-2xl uppercase gap-4 z-2 pb-5 pr-5">
						<div className="bg-background flex items-center justify-center p-2 rounded-lg">
							<ctaButton.icon className="text-primary scale-150" />
						</div>
						<p className="tracking-wider">{ctaButton.label}</p>
					</Link>
					<Image
						src={imageSettings.image}
						alt={imageSettings.alt}
						className="absolute object-cover w-full h-full"
					/>
				</div>
			</MainGrid>
		</div>
	);
};
