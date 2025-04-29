import React from "react";

import { AboutUsProps } from "@/sections/AboutSection/config";

import { MainGrid } from "@/components/MainGrid/Component";
import Image from "next/image";
import { RightColumnAbout } from "@/components/RightColumnAbout/Component";
import { cn } from "@/lib/utils";

export const AboutUs: React.FC<AboutUsProps> = ({
	leftSide,
	rightSide,
	isHomePage,
}) => {
	function getPositionFromHotspot(hotspot?: [number, number]) {
		if (!hotspot || !hotspot[0] || !hotspot[1]) return "center";
		return `${hotspot[0] * 100}% ${hotspot[1] * 100}%`;
	}
	return (
		<div className="w-full h-full">
			<MainGrid className="h-full">
				{isHomePage ? (
					<div className="col-span-4 sm:col-span-6 lg:col-span-8">
						<div className="rounded-t-[2.5rem] lg:rounded-br-[2.5rem] overflow-hidden relative">
							<div className="LAYERMASK">
								<div className="w-full h-48 sm:w-80 lg:w-96 sm:h-38 bg-secondary absolute bottom-0 left-0 sm:rounded-tr-[2.5rem] z-1" />

								<div className="w-full lg:w-42 h-20 bg-secondary absolute bottom-0 left-80 lg:left-96 lg:rounded-tr-[2.5rem] z-1" />
								<div
									className="absolute w-10 h-10 left-80 lg:left-96 bottom-20 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-bl-[2.5rem] z-1 hidden sm:block"
									style={{ clipPath: "inset(0)" }}
								/>
								<div
									className="absolute w-10 h-10 left-0 bottom-48 sm:bottom-38 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-bl-[2.5rem] z-1"
									style={{ clipPath: "inset(0)" }}
								/>
								<div
									className="absolute w-10 h-10 bottom-48 right-0 sm:bottom-20 lg:left-[34.5rem] lg:bottom-0 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-bl-[2.5rem] z-1 scale-x-[-1] lg:scale-x-[1]"
									style={{ clipPath: "inset(0)" }}
								/>
							</div>

							<div className="absolute bottom-28 lg:bottom-18 left-0 z-1">
								<h2 className="uppercase text-primary text-5xl lg:text-7xl pb-3 sm:pb-0">
									{leftSide.mainHeading}
								</h2>
							</div>
							<div className="absolute w-full lg:w-[33rem] bottom-0 left-0 z-1">
								<p className="text-primary leading-snug">
									{leftSide.subText}
								</p>
							</div>

							<Image
								className="h-[35rem] w-full object-cover"
								src={leftSide.imageSettings.image}
								alt={leftSide.imageSettings.alt}
								style={{
									objectPosition: getPositionFromHotspot(
										leftSide.imageSettings
											.imagePositionOverride
									),
								}}
							/>
						</div>
					</div>
				) : (
					<div className="col-span-4 sm:col-span-6 lg:col-span-8 pb-8">
						<div className="flex flex-col justify-between w-full h-full z-20 gap-8">
							<div className="flex flex-col gap-8">
								<h2 className="uppercase text-primary text-6xl lg:text-7xl">
									{leftSide.mainHeading}
								</h2>

								<p className="text-primary leading-snug sm:pr-20">
									{leftSide.subText}
								</p>
							</div>

							{leftSide.ctaButton && (
								<button className="flex text-primary items-center cursor-pointer text-2xl uppercase gap-4 group w-fit">
									<div className="bg-foreground group-hover:bg-card transition-colors duration-300 flex items-center justify-center py-2 px-3 rounded-lg">
										<div className="transform group-hover:rotate-45 transition-all duration-300 text-accent-foreground group-hover:text-foreground">
											<leftSide.ctaButton.icon className="scale-150" />
										</div>
									</div>
									<p className="tracking-wider">
										{leftSide.ctaButton.label}
									</p>
								</button>
							)}
						</div>
					</div>
				)}

				<RightColumnAbout
					className={cn(
						"flex md:flex-row gap-5 lg:col-start-9 sm:col-span-6 col-span-4 z-1",
						isHomePage
							? "flex-col lg:flex-col"
							: "flex-col-reverse lg:flex-col-reverse"
					)}
					{...rightSide}
				/>
			</MainGrid>
		</div>
	);
};
