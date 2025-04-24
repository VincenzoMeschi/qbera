import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import { LocationSectionProps } from "@/sections/LocationSection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745430065/Locations_Hero_Section_i6byml.jpg",
			width: 2560,
			height: 1610,
		},
		alt: "Quarterback holding football at QB Era looking off into the distance",
		imagePositionOverride: [0, 1],
	},
	mainHeading: "Locations",
};

export const locationData: LocationSectionProps = {
	pageHeading: {
		mainHeading: "Find Us In Your City",
		subText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis. ",
	},
	locations: [
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745430265/Chicago_Illinois_qyjpjl.jpg",
					height: 553,
					width: 2560,
				},
				alt: "Skyline of Chicago, IL",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Chicago, IL",
			ctaButton: {
				icon: ArrowOutwardIcon,
				label: "Get Started",
				url: "https://youtube.com",
			},
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745430175/Dallas_Texas_hvs1ry.jpg",
					height: 549,
					width: 2560,
				},
				alt: "Skyline of Dallas, Texas",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Dallas, TX",
			ctaButton: {
				icon: ArrowOutwardIcon,
				label: "Get Started",
				url: "https://youtube.com",
			},
		},
	],
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
		url: "https://youtube.com",
	},
};
