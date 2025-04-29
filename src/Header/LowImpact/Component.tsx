import React from "react";
import { LowImpactHeaderProps } from "./config";
import { Nav } from "@/components/Nav/Component";
import { MainGrid } from "@/components/MainGrid/Component";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const LowImpactHeader: React.FC<LowImpactHeaderProps> = (props) => {
	function getPositionFromHotspot(hotspot?: [number, number]) {
		if (!hotspot || !hotspot[0] || !hotspot[1]) return "center";
		return `${hotspot[0] * 100}% ${hotspot[1] * 100}%`;
	}
	const { imageSettings, mainHeading } = props;
	return (
		<div className={cn("relative h-[30rem]", props.className)}>
			<div className="flex w-full bg-transparent h-[30rem] items-center justify-end absolute p-2 z-10">
				<div className="relative w-full h-full bg-secondary-foreground rounded-[2.5rem] z-10 overflow-hidden">
					<Nav />
					<div className="absolute bottom-0 left-0 bg-background flex pl-16  w-full md:w-[37rem] xl:w-1/2 h-44 md:rounded-tr-[2.5rem] z-10" />
					<div
						className="absolute w-10 h-10 left-0 bottom-44 bg-transparent shadow-[0_0_0_1rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-bl-[2.5rem] z-10 "
						style={{ clipPath: "inset(0)" }}></div>
					<div
						className="absolute w-10 h-10 bottom-44 right-0 md:left-[37rem] xl:left-1/2 md:bottom-0 bg-transparent shadow-[0_0_0_1rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-br-[2.5rem] md:rounded-bl-[2.5rem] md:rounded-br-none z-10"
						style={{ clipPath: "inset(0)" }}></div>
					<MainGrid className="h-full z-0 items-end">
						<div className="flex col-span-full lg:col-span-6 lg:items-center items-end z-10 row-end-1 pb-4">
							<h1 className="text-primary text-8xl sm:text-9xl uppercase pb-6 sm:pb-0">
								{mainHeading}
							</h1>
						</div>
						<div className="lg:col-start-7 sm:col-start-2 col-start-1 col-span-full lg:col-span-6 flex items-start justify-center row-end-1 z-0 self-start h-full w-full">
							<Image
								src={imageSettings.image}
								alt={imageSettings.alt}
								className={`
    h-full w-auto object-cover object-right
    [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
    mask-repeat-no-repeat`}
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
