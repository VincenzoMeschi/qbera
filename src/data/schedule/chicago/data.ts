import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746079610/Kyan_Berry-Johnson_z6xmwe.jpg",
			width: 2560,
			height: 1196,
		},
		alt: "Kyan Berry-Johnson running a route at QB Era",
		imagePositionOverride: [1, 0],
	},
	mainHeading: "Book Now",
};

export const ctaData: CTASectionProps = {
	mainHeading: "Start Your Journey",
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745430365/Locations_CTA_mvluq0.jpg",
			height: 1526,
			width: 2560,
		},
		alt: "Wide Receiver mid stride while running a route at QB Era training",
	},
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "/schedule/chicago",
	},
};
