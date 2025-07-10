import React from "react";
import Image from "next/image";
import { CoachesSectionProps } from "@/sections/CoachesSection/config";
import { MainGrid } from "@/components/MainGrid/Component";

export const CoachesSection: React.FC<CoachesSectionProps> = (coaches) => {
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="col-span-4 sm:col-span-6 lg:col-span-12 h-[175vh] md:h-full flex flex-col md:flex-row gap-3">
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
									className="flex flex-1 peer-checked:flex-3 lg:peer-checked:flex-2 transition-all duration-300 ease-in-out rounded-[2.5rem] h-[46rem] cursor-pointer md:justify-end items-end relative overflow-hidden peer-checked:[&>p]:opacity-90 peer-checked:[&>p]:delay-200 peer-checked:[&>div]:block">
									<h3 className="text-primary-foreground text-shadow-lg text-5xl z-2 transform absolute top-5 md:top-auto md:bottom-0 left-5 w-96 md:rotate-270 origin-top-left uppercase">
										{coach.mainHeading}
									</h3>
									<p className="text-primary-foreground pr-6 md:w-3/4 h-5/8 lg:h-auto z-2 pl-6 md:pl-0 md:pr-3 pb-10 opacity-0 transition-opacity ease-in-out overflow-y-scroll styleScroll">
										{coach.subText}
									</p>
									<div className="hidden z-1 absolute h-full w-full bg-gradient-to-t from-black to-[#0000007a] opacity-100"></div>
									<Image
										src={coach.imageSettings.image}
										alt={coach.imageSettings.alt}
										className="absolute h-full object-cover overflow-visible w-full object-top top-0 sm:top-0 z-0"
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
