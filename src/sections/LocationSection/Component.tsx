import React from "react";
import { LocationSectionProps } from "@/sections/LocationSection/config";
import { MainGrid } from "@/components/MainGrid/Component";
import Image from "next/image";

export const LocationSection: React.FC<LocationSectionProps> = ({
	pageHeading,
	locations,
}) => {
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="flex flex-col gap-5 items-center justify-center lg:flex-row lg:justify-between col-span-4 sm:col-span-6 lg:col-span-12 lg:gap-14 pb-5">
					<h2 className="text-center lg:text-left text-5xl xl:text-7xl uppercase w-full">
						{pageHeading.mainHeading}
					</h2>
					<p className="w-full text-center lg:text-left">
						{pageHeading.subText}
					</p>
				</div>
				{locations.map((location, i) => {
					return (
						<div
							className="col-span-4 sm:col-span-6 lg:col-span-12 flex items-end justify-between rounded-[2.5rem] h-80 p-6 relative overflow-hidden"
							key={i}>
							<h3 className="text-5xl uppercase text-primary-foreground z-3">
								{location.mainHeading}
							</h3>
							<button className="flex text-primary-foreground items-center cursor-pointer text-xl uppercase gap-4 group z-3">
								<div className="bg-background group-hover:bg-card transition-colors duration-300 flex items-center justify-cente rounded-lg py-1 px-1.5">
									<div className="transform group-hover:rotate-45 transition-all duration-300 text-primary group-hover:text-foreground">
										<location.ctaButton.icon className="scale-100" />
									</div>
								</div>
								<p className="tracking-wider hidden sm:block">
									{location.ctaButton.label}
								</p>
							</button>
							<div className="z-1 absolute left-0 bottom-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
							<Image
								src={location.imageSettings.image}
								alt={location.imageSettings.alt}
								className="object-cover object-center absolute top-0 left-0 w-full h-full z-0"
							/>
						</div>
					);
				})}
			</MainGrid>
		</div>
	);
};
