import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { AboutUsProps } from "@/sections/AboutSection/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import { GiantCTASectionProps } from "@/sections/GiantCTASection/config";
import { TestimonialSectionProps } from "@/sections/TestimonialSection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745426747/About_Page_Hero_zakam4.jpg",
			height: 970,
			width: 2560,
		},
		alt: "Matt Morrissey dropping back with a football looking downfield",
		imagePositionOverride: [0.6, 0.5],
	},
	mainHeading: "About Us",
};

export const aboutUsData: AboutUsProps = {
	isHomePage: false,
	leftSide: {
		mainHeading: "We Set The Standard",
		subText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel neque facilisis, molestie massa quis, dapibus tortor. Suspendisse feugiat blandit tempor. Morbi et diam sit amet leo aliquam consectetur. Donec vitae tincidunt magna, nec ornare eros. Nunc faucibus turpis vitae diam pharetra, ut accumsan nunc ultricies. Curabitur nec purus maximus, porttitor mi ultrices, malesuada lacus. Vestibulum tempus interdum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus pharetra est at libero sodales facilisis. Aenean quis est vitae nisl volutpat finibus. Maecenas laoreet interdum ex, vel lobortis ex cursus in. Praesent sit amet justo cursus, ornare mi nec, posuere ligula. Pellentesque nibh velit, mattis nec dignissim ut, bibendum nec diam. Mauris id orci quam. Donec id ultrices ligula. Aliquam ut lorem fermentum, ultricies nisl quis, condimentum augue. Aliquam massa quam, sollicitudin vel congue a, aliquet quis nulla. Nam tincidunt quam sem, interdum tristique orci posuere vitae. Sed non elit eu sem mattis dignissim sit amet eget est. Nunc viverra, purus et vulputate maximus, urna justo porttitor orci, vehicula malesuada urna felis non tortor. Etiam ultricies dolor lacus. Nullam laoreet lacus vel porttitor aliquet. Suspendisse potenti. Nunc id nibh et dui convallis porttitor ac et dolor.",
		ctaButton: {
			icon: ArrowOutwardIcon,
			url: "https://youtube.com",
			label: "Get Started",
		},
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

export const giantCTAData: GiantCTASectionProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745429438/Kyan_Berry-Johnson_okmnjs.jpg",
			width: 2560,
			height: 1506,
		},
		alt: "Kyan Berry-Johnson training at QB Era",
		imagePositionOverride: [1, 1],
	},
	mainHeading: "Train. Develop. Grow.",
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "https://youtube.com",
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
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745429681/Wide_Receiver_Hands_On_Hips_c4hgst.jpg",
			width: 2560,
			height: 1157,
		},
		alt: "Wide Receiver at QB Era standing at a training session",
		imagePositionOverride: [0, 0],
	},
	mainHeading: "Join The Family.",
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "https://youtube.com",
	},
};
