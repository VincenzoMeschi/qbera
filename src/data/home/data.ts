import { HighImpactHeaderProps } from "@/Header/HighImpact/config";
import { AboutUsProps } from "@/sections/AboutSection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { TestimonialSectionProps } from "@/sections/TestimonialSection/config";
import { CTASectionProps } from "@/sections/CTASection/config";

export const heroData: HighImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745424746/Main_Hero_Image_nrn65p.jpg",
			height: 1672,
			width: 2560,
		},
		alt: "Jonas Williams tossing a football to himself in a dark room",
		imagePositionOverride: [0.4, 0.2],
	},
	mainHeading: "The Dawn Of A New Era",
	subText:
		"We build real bonds through complete training. Creating not just football stars, but life leaders. Our athletes carry our standards because they're family. Excellence in everything—that's our promise.",
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "https://youtube.com",
	},
	circleTextDesignContent: "Athletics - Development - Academy -",
};

export const aboutUsData: AboutUsProps = {
	isHomePage: true,
	leftSide: {
		imageSettings: {
			image: {
				src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745425085/3T0A1245-83_1_mppr3e.jpg",
				width: 1920,
				height: 1165,
			},
			alt: "Coach Preston Earl coaching a quarterback in the middle of a drill",
			imagePositionOverride: [0.7, 0.6],
		},
		mainHeading: "Our Identity",
		subText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis. ",
	},
	rightSide: {
		top: {
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745425405/About_Top_Right_iap01p.jpg",
					width: 1280,
					height: 656,
				},
				alt: "Close of of a wide reciever running across the frame in a hoodie and nike gloves",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Ride n' Grind",
			subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		bottom: {
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745425647/About_Bottom_Right_qkg1i1.jpg",
					width: 1280,
					height: 878,
				},
				alt: "Coach Kofi Hughes talking to an athlete during training",
				imagePositionOverride: [1, 1],
			},
			ctaButton: {
				icon: ArrowOutwardIcon,
				url: "https://youtube.com",
			},
			mainHeading: "Get Started",
			subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	},
};

export const testimonialData: TestimonialSectionProps = {
	pageHeading: {
		mainHeading: `What's The "Secret"?`,
		subText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis. ",
	},
	testimonials: [
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745425742/Jonas_Williams_Testimonial_yn0dzp.jpg",
					width: 1280,
					height: 693,
				},
				alt: "Jonas Williams throwing a football",
				imagePositionOverride: [1, 1],
			},
			logoSettings: {
				logo: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428225/image_68_aa32gq.png",
					width: 200,
					height: 200,
				},
				alt: "University of Oregon Logo",
				logoPositionOverride: [1, 1],
			},
			playerName: "Jonas Williams",
			affiliation: "University of Oregon",
			quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis.",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745425954/Jack_Laush_Testimonial_zmrt9z.jpg",
					width: 1280,
					height: 693,
				},
				alt: "Jack Lausch throwing a football",
				imagePositionOverride: [1, 1],
			},
			logoSettings: {
				logo: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428220/image_65_uxwyd3.png",
					width: 200,
					height: 200,
				},
				alt: "Northwestern University Logo",
				logoPositionOverride: [1, 1],
			},
			playerName: "Jack Lausch",
			affiliation: "Northwestern University",
			quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis.",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745426063/Danny_Etling_Testimonial_ezfx0u.jpg",
					width: 1280,
					height: 693,
				},
				alt: "Danny Etling holding a football looking downfield at training",
				imagePositionOverride: [1, 1],
			},
			logoSettings: {
				logo: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428219/image_63_jtbezz.png",
					width: 200,
					height: 200,
				},
				alt: "Michigan Panthers Logo",
				logoPositionOverride: [1, 1],
			},
			playerName: "Danny Etling",
			affiliation: "Michigan Panthers",
			quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis.",
		},
	],
};

export const ctaData: CTASectionProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745426240/Matt_Morrissey_iayvok.jpg",
			width: 2560,
			height: 1188,
		},
		alt: "Matt Morrisey snapping a football to himself",
		imagePositionOverride: [1, 0],
	},
	mainHeading: "QB's, First One's On Us.",
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "https://youtube.com",
	},
};
