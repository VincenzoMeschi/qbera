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
			"At our core, we believe that success is built on more than just talent—it's about relentless effort, discipline, and a mindset that refuses to quit. Our philosophy centers around the idea that every quarterback has the potential to be great, but it’s the work behind the scenes, the dedication in every rep, and the drive to constantly improve that unlocks that greatness. We approach every training session with a focus on not just refining technical skills, but developing the mental toughness and leadership qualities that define elite quarterbacks. Our approach combines the best of cutting-edge techniques with time-tested fundamentals. We tailor our programs to meet each athlete where they are, pushing them beyond their comfort zones while building a strong foundation of skills. Whether it’s improving footwork, mastering throwing mechanics, or enhancing football IQ, we focus on the holistic development of every quarterback. We believe that true excellence isn’t just about on-field performance; it's about building athletes who are leaders, who embrace challenges, and who have the discipline to outwork their competition.",
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
			"Our guys put in the work. We just provide the guidence and scenarios to maximize their effort - and it works. Don't believe us? Hear what our guys have to say.",
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
