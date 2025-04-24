import React from "react";
import { ContactSectionProps } from "@/sections/ContactSection/config";
import { MainGrid } from "@/components/MainGrid/Component";
import { Form } from "@/components/Form/Component";
import Image from "next/image";

export const ContactSection: React.FC<ContactSectionProps> = ({
	imageSettings,
	form,
}) => {
	return (
		<div className="w-full h-full">
			<MainGrid>
				<div className="lg:col-span-5 col-span-full mb-10 h-96 lg:h-fit rounded-[2.5rem] overflow-hidden">
					<Image
						className="w-full h-full object-cover"
						src={imageSettings.image}
						alt={imageSettings.alt}
					/>
				</div>
				<Form
					className="col-span-full lg:col-span-6 lg:col-start-7"
					{...form}
				/>
			</MainGrid>
		</div>
	);
};
