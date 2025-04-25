import React from "react";
import Image from "next/image";
import { TrainingCardProps } from "@/components/TrainingCard/config";

export const TrainingCard: React.FC<TrainingCardProps> = ({
	imagePosition,
	imageSettings,
	content,
}) => {
	return (
		<div className="flex flex-col col-span-full gap-10 lg:grid lg:grid-cols-12 lg:gap-5 lg:grid-rows-1">
			<div
				className={`lg:col-span-5 rounded-[2.5rem] overflow-hidden lg:row-start-1 ${
					imagePosition === "left"
						? "lg:col-start-1"
						: "lg:col-start-8"
				}`}>
				<Image
					src={imageSettings.image}
					alt={imageSettings.alt}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`lg:col-span-6 flex flex-col h-fit gap-6 lg:h-full justify-between lg:row-start-1 ${
					imagePosition === "left"
						? "lg:col-start-7"
						: "lg:col-start-1"
				}`}>
				<h2 className="text-6xl uppercase">{content.mainHeading}</h2>
				<h6 className="text-2xl italic">{content.subHeading}</h6>
				<p>{content.description}</p>
				<button className="flex text-primary items-center cursor-pointer text-xl uppercase gap-4 group z-2">
					<div className="bg-foreground group-hover:bg-card transition-colors duration-300 flex items-center justify-cente rounded-lg py-1 px-1.5">
						<div className="transform group-hover:rotate-45 transition-all duration-300 text-primary-foreground group-hover:text-primary">
							<content.ctaButton.icon className="scale-100" />
						</div>
					</div>
					<p className="tracking-wider hidden sm:block">
						{content.ctaButton.label}
					</p>
				</button>
			</div>
		</div>
	);
};
