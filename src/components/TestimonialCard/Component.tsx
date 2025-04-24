import React from "react";
import { TestimonialCardProps } from "./config";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { FormatQuote } from "@mui/icons-material";

export const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
	const {
		className,
		affiliation,
		imageSettings,
		logoSettings,
		playerName,
		quote,
	} = props;
	function getPositionFromHotspot(hotspot?: [number, number]) {
		if (!hotspot || !hotspot[0] || !hotspot[1]) return "center";
		return `${hotspot[0] * 100}% ${hotspot[1] * 100}%`;
	}
	return (
		<div className={cn(className, "bg-card p-5 rounded-[2.5rem] relative")}>
			<FormatQuote className="absolute right-32 scale-[15] z-1 bottom-1/3 opacity-10" />
			<div className="flex flex-col gap-4">
				<div className="h-1/2 rounded-[2.5rem]">
					<div className="relative">
						<div className="w-17 h-17 absolute top-0 right-0 bg-card rounded-bl-[2.5rem]" />
						<div
							className="absolute w-8 h-8 top-0 right-17 bg-transparent shadow-[0_0_0_1rem_#FFF,0_0_0_0_#FFF] rounded-tr-[2.5rem] z-10"
							style={{ clipPath: "inset(0)" }}
						/>
						<div
							className="absolute w-8 h-8 top-17 right-0 bg-transparent shadow-[0_0_0_1rem_#FFF,0_0_0_0_#FFF] rounded-tr-[2.5rem] z-10"
							style={{ clipPath: "inset(0)" }}
						/>
						<div className="w-14 h-14 flex items-center justify-center bg-background absolute top-0 right-0 z-10 rounded-[1.5rem]">
							<Image
								src={logoSettings.logo}
								alt={logoSettings.alt}
								className="h-8 w-auto z-10"
								style={{
									objectPosition: getPositionFromHotspot(
										logoSettings.logoPositionOverride
									),
								}}
							/>
						</div>
						<Image
							src={imageSettings.image}
							alt={imageSettings.alt}
							className="object-cover w-full h-auto rounded-[2.5rem]"
							style={{
								objectPosition: getPositionFromHotspot(
									imageSettings.imagePositionOverride
								),
							}}
						/>
					</div>
				</div>
				<div className="h-1/2 flex flex-col justify-between">
					<div className="flex flex-col pb-2">
						<h4 className="uppercase text-3xl">{playerName}</h4>
						<h6 className="uppercase leading-relaxed font-light">
							{affiliation}
						</h6>
					</div>
					<p>{quote}</p>
				</div>
			</div>
		</div>
	);
};
