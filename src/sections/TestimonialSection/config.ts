import { TestimonialCardProps } from "@/components/TestimonialCard/config";

export type TestimonialSectionProps = {
	pageHeading: {
		mainHeading: string;
		subText: string;
	};
	testimonials: TestimonialCardProps[];
};
