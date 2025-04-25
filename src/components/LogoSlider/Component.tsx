"use client";

import React from "react";

import { LogoSliderProps } from "@/components/LogoSlider/config";

import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { MainGrid } from "../MainGrid/Component";

export const LogoSlider: React.FC<LogoSliderProps> = ({ logos }) => {
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="col-span-4 sm:col-span-6 lg:col-span-12 z-1">
					<Slider
						width="275px"
						duration={30}
						pauseOnHover={false}
						blurBorders={true}
						blurBorderColor={"#f0f0f0"}>
						{logos.map((logo, i) => {
							return (
								<Slider.Slide key={i}>
									<Image
										src={logo.image}
										alt={logo.alt}
										width={500}
										height={500}
										className="w-auto h-15 overflow-clip md:h-20"
									/>
								</Slider.Slide>
							);
						})}
					</Slider>
				</div>
			</MainGrid>
		</div>
	);
};
