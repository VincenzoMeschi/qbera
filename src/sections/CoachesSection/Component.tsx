import React from "react";
import Image from "next/image";
import { CoachesSectionProps } from "@/sections/CoachesSection/config";
import { MainGrid } from "@/components/MainGrid/Component";

export const CoachesSection: React.FC<CoachesSectionProps> = (coaches) => {
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="col-span-4 sm:col-span-6 lg:col-span-12 h-[150vh] md:h-full flex flex-col md:flex-row gap-3">
					{coaches.coach.map((coach, i) => {
						return (
							<div key={i} className="contents group">
								<input
									type="radio"
									id={`coach-${i}`}
									name="coach"
									className="hidden peer"
									defaultChecked={i == 0}
								/>
								<label
									htmlFor={`coach-${i}`}
									className="flex flex-1 peer-checked:flex-3 lg:peer-checked:flex-2 transition-all duration-300 ease-in-out rounded-[2.5rem] h-[36rem] cursor-pointer md:justify-end items-end relative overflow-hidden peer-checked:[&>p]:opacity-90 peer-checked:[&>p]:delay-200">
									<h3 className="text-primary-foreground text-shadow-lg text-5xl z-2 transform absolute top-5 md:top-auto md:bottom-0 left-5 w-96 md:rotate-270 origin-top-left uppercase">
										{coach.mainHeading}
									</h3>
									<p className="text-primary-foreground w-3/4 z-2 pl-6 md:pl-0 md:pr-3 pb-10 opacity-0 transition-opacity ease-in-out">
										{coach.subText}
									</p>
									<div className="z-1 absolute h-full w-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
									<Image
										src={coach.imageSettings.image}
										alt={coach.imageSettings.alt}
										className="absolute h-full object-cover overflow-visible w-full object-top-right md:object-top top-0 sm:top-0 z-0"
									/>
								</label>
							</div>
						);
					})}
				</div>
			</MainGrid>
		</div>
	);
};
