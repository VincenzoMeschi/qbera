import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightColumnAboutProps } from "./config";

export const RightColumnAbout: React.FC<RightColumnAboutProps> = (props) => {
	function getPositionFromHotspot(hotspot?: [number, number]) {
		if (!hotspot || !hotspot[0] || !hotspot[1]) return "center";
		return `${hotspot[0] * 100}% ${hotspot[1] * 100}%`;
	}

	const { top, bottom } = props;
	return (
		<div className={props.className}>
			<div className="w-full lg:h-2/5 rounded-[2.5rem] overflow-hidden relative">
				<div className="flex flex-col absolute top-5 left-5 w-50">
					<h3 className="text-secondary text-4xl uppercase leading-relaxed">
						{top.mainHeading}
					</h3>
					<p className="text-secondary w-full">{top.subText}</p>
				</div>

				<Image
					className="h-full w-full object-cover"
					src={top.imageSettings.image}
					alt={top.imageSettings.alt}
					style={{
						objectPosition: getPositionFromHotspot(
							top.imageSettings.imagePositionOverride
						),
					}}
				/>
			</div>
			<div className=" w-full lg:h-3/5 rounded-[2.5rem] rounded-br-none overflow-hidden relative">
				<div className="absolute inset-0 bg-black opacity-30 sm:hidden z-0" />

				<div className="flex flex-col absolute top-5 right-auto left-5 sm:right-5 sm:left-auto w-50">
					<h3 className="text-secondary text-4xl uppercase leading-relaxed">
						{bottom.mainHeading}
					</h3>
					<p className="text-secondary w-full">{bottom.subText}</p>
				</div>
				<div className="absolute bottom-0 right-0 z-10">
					<Link
						href={bottom.ctaButton.url}
						className="flex text-primary items-center cursor-pointer uppercase group">
						<div className="bg-foreground group-hover:bg-card transition-colors duration-300 flex items-center justify-center p-10 rounded-[2rem]">
							<div className="transform group-hover:rotate-45 transition-all duration-300 text-accent-foreground group-hover:text-foreground">
								<bottom.ctaButton.icon className="scale-200" />
							</div>
						</div>
					</Link>
				</div>
				<div className="LAYERMASK">
					<div className="w-30 h-30 bg-secondary absolute bottom-0 right-0 rounded-tl-[2.5rem] z-1" />
					<div
						className="absolute w-10 h-10 right-30 bottom-0 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-br-[2.5rem] z-10"
						style={{ clipPath: "inset(0)" }}
					/>
					<div
						className="absolute w-10 h-10 right-0 bottom-30 bg-transparent shadow-[0_0_0_10rem_#F0F0F0,0_0_0_0_#F0F0F0] rounded-br-[2.5rem] z-10"
						style={{ clipPath: "inset(0)" }}
					/>
				</div>
				<Image
					className="h-full w-full object-cover"
					src={bottom.imageSettings.image}
					alt={bottom.imageSettings.alt}
					style={{
						objectPosition: getPositionFromHotspot(
							bottom.imageSettings.imagePositionOverride
						),
					}}
				/>
			</div>
		</div>
	);
};
