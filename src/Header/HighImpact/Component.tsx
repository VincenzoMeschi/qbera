import React from "react";

import { HighImpactHeaderProps } from "@/Header/HighImpact/config";

import { MainGrid } from "@/components/MainGrid/Component";
import { Nav } from "@/components/Nav/Component";
import CircularText from "@/components/CircularText/Component";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const HighImpactHeader: React.FC<HighImpactHeaderProps> = ({
	imageSettings,
	mainHeading,
	subText,
	ctaButton,
	circleTextDesignContent,
	className,
}) => {
	function getPositionFromHotspot(hotspot?: [number, number]) {
		if (!hotspot || !hotspot[0] || !hotspot[1]) return "center";
		return `${hotspot[0] * 100}% ${hotspot[1] * 100}%`;
	}

	return (
		<div className={cn("relative h-screen", className)}>
			<CircularText
				text={circleTextDesignContent as string}
				onHover="slowDown"
				spinDuration={20}
				className="absolute sm:block hidden -bottom-15 right-10 z-50 overflow-visible"
			/>
			<div className="flex w-full bg-transparent h-screen items-center justify-end absolute p-2 z-10">
				<div className="relative w-full h-full bg-secondary-foreground rounded-[2.5rem] z-10 overflow-hidden">
					<Nav />
					<div>
						<p className="absolute w-[30rem] text-secondary left-8 lg:bottom-6 lg:left-[26rem] z-30 text-shadow-lg lg:block hidden">
							{subText}
						</p>
					</div>
					<div className="absolute bottom-0 left-0 bg-background flex w-full items-center justify-center sm:w-96 py-10 sm:rounded-tr-[2.5rem] z-20">
						<a
							href={ctaButton.url as string}
							className="flex text-primary items-center cursor-pointer text-2xl uppercase gap-4 group w-fit">
							<div className="bg-foreground group-hover:bg-card transition-colors duration-300 flex items-center justify-center py-2 px-3 rounded-lg">
								<div className="transform group-hover:rotate-45 transition-all duration-300 text-accent-foreground group-hover:text-foreground">
									<ctaButton.icon className=" scale-150" />
								</div>
							</div>
							<p className="tracking-wider">{ctaButton.label}</p>
						</a>
					</div>
					<div
						className="absolute w-10 h-10 left-0 bottom-32 bg-transparent shadow-[0_0_0_1rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-bl-[2.5rem] z-10"
						style={{ clipPath: "inset(0)" }}></div>
					<div
						className="absolute w-10 h-10 right-0 bottom-32 sm:left-[24rem] sm:bottom-0 bg-transparent shadow-[0_0_0_1rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-br-[2.5rem] sm:rounded-bl-[2.5rem] sm:rounded-br-none z-10"
						style={{ clipPath: "inset(0)" }}></div>
					<MainGrid className="h-full z-0">
						<div className="flex col-span-full lg:col-span-6 lg:items-center items-end z-10 row-end-1">
							<h1 className="text-primary-foreground text-8xl xl:text-9xl uppercase text-shadow-lg pb-36 lg:pb-0">
								{mainHeading}
							</h1>
						</div>
						<div className="lg:col-start-7 sm:col-start-2 col-start-1 col-span-full lg:col-span-6 flex items-start justify-center row-end-1 z-0">
							<div className="z-1 absolute h-full w-full bg-gradient-to-t from-black to-transparent opacity-55"></div>
							<Image
								className="h-[150%] w-auto object-cover -mt-30 z-0 overflow-visible"
								src={imageSettings.image}
								alt={imageSettings.alt}
								style={{
									objectPosition: getPositionFromHotspot(
										imageSettings.imagePositionOverride
									),
								}}
							/>
						</div>
					</MainGrid>
				</div>
			</div>
		</div>
	);
};
