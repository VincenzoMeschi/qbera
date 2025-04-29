import React from "react";
import { CTASectionProps } from "./config";
import { MainGrid } from "@/components/MainGrid/Component";
import Image from "next/image";

export const CTASection: React.FC<CTASectionProps> = ({
	imageSettings,
	mainHeading,
	ctaButton,
}) => {
	function getPositionFromHotspot(hotspot?: [number, number]) {
		if (!hotspot || !hotspot[0] || !hotspot[1]) return "center";
		return `${hotspot[0] * 100}% ${hotspot[1] * 100}%`;
	}
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="col-span-4 flex items-start lg:items-end w-full sm:col-span-6 lg:col-span-12 rounded-[2.5rem] rounded-br-none overflow-hidden bg-foreground h-96 z-1 relative">
					<button className="flex text-primary items-center cursor-pointer text-2xl uppercase gap-4 absolute z-30 left-14 sm:right-10 sm:left-auto bottom-4 group">
						<div className="bg-foreground group-hover:bg-card transition-colors duration-300 flex items-center justify-cente rounded-lg py-2 px-3">
							<div className="transform group-hover:rotate-45 transition-all duration-300 text-accent-foreground group-hover:text-foreground">
								<ctaButton.icon className="scale-150" />
							</div>
						</div>
						<p className="tracking-wider">{ctaButton.label}</p>
					</button>
					<div className="w-full sm:w-76 h-20 sm:rounded-tl-[2.5rem] bg-background absolute right-0 bottom-0 z-20" />
					<div
						className="absolute w-8 h-8 sm:bottom-0 sm:right-76 sm:left-auto left-0 bottom-20 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-bl-[2.5rem] sm:rounded-br-[2.5rem] sm:rounded-bl-none z-10"
						style={{ clipPath: "inset(0)" }}
					/>
					<div
						className="absolute w-8 h-8 bottom-20 right-0 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-br-[2.5rem] z-10"
						style={{ clipPath: "inset(0)" }}
					/>

					<div className="w-full flex items-start z-10 p-5">
						<h2 className="text-secondary text-shadow-lg text-5xl lg:text-6xl uppercase">
							{mainHeading}
						</h2>
					</div>

					<div className="lg:hidden z-1 absolute h-full w-full bg-gradient-to-b from-black to-transparent opacity-70"></div>
					<Image
						src={imageSettings.image}
						alt={imageSettings.alt}
						className="h-96 w-auto mask-linear-270 mask-linear-from-80% mask-linear-to-100% absolute right-0 z-0 overflow-hidden object-cover "
						style={{
							objectPosition: getPositionFromHotspot(
								imageSettings.imagePositionOverride
							),
						}}
					/>
				</div>
			</MainGrid>
		</div>
	);
};
