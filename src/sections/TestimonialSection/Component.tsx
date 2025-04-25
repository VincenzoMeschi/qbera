import React from "react";
import { TestimonialSectionProps } from "@/sections/TestimonialSection/config";
import { TestimonialCard } from "@/components/TestimonialCard/Component";
import { MainGrid } from "@/components/MainGrid/Component";

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
	pageHeading,
	testimonials,
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

				{testimonials.map((testimonial, i) => {
					return (
						<TestimonialCard
							className="col-span-4 sm:col-span-6 lg:col-span-4 z-1"
							key={i}
							{...testimonial}
						/>
					);
				})}
			</MainGrid>
		</div>
	);
};
