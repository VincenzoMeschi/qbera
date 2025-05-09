import { HighImpactHeaderProps } from "@/Header/HighImpact/config";
import { AboutUsProps } from "@/sections/AboutSection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { TestimonialSectionProps } from "@/sections/TestimonialSection/config";
import { CTASectionProps } from "@/sections/CTASection/config";

export const heroData: HighImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746117151/matt_morsissey_b8uwlb.jpg",
			height: 2972,
			width: 2391,
		},
		alt: "Matt Morrissey dropping back with a football looking downfield",
		imagePositionOverride: [0.7, 0.2],
	},
	mainHeading: "The Dawn Of A New Era",
	subText:
		"We aim to position our athletes for success not only on the football field but also as leaders in life. We hold them to high standards because we see them as a reflection of who we are, as individuals and as a program. At the end of the day, we’re more than just a training service—we’re a family.",
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "/schedule/chicago",
	},
	circleTextDesignContent: "Athletics - Development - Academy -",
};

export const aboutUsData: AboutUsProps = {
	isHomePage: true,
	leftSide: {
		imageSettings: {
			image: {
				src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746420057/Reggie_macr0g.jpg",
				width: 1920,
				height: 1165,
			},
			alt: "Reggie Fleurima lining up ready to run a route at QB Era",
			imagePositionOverride: [0.6, 0.6],
		},
		mainHeading: "Our Identity",
		subText:
			"Our training is built to develop more than just technical skill — it fosters the confidence, discipline, and mindset required to excel at the highest levels of the game. We’re not just shaping quarterbacks; we’re shaping the future of football.",
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
			mainHeading: "Rise n' Grind",
			subText:
				"Your success starts before the sun comes up. Join us Sunday @ 6:00am",
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
				url: "/schedule/chicago",
			},
			mainHeading: "Get Started",
			subText: "Invest in yourself today. Click below to get started.",
		},
	},
};

export const testimonialData: TestimonialSectionProps = {
	pageHeading: {
		mainHeading: `What's The Secret?`,
		subText:
			"Our athletes put in the hard work. We simply provide the guidance and scenarios that maximize their effort, and it delivers results. Don’t just take our word for it—hear directly from our athletes.",
	},
	testimonials: [
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746081938/Mark_Gronowski_h9okhc.jpg",
					width: 1280,
					height: 693,
				},
				alt: "Mark Gronowski throwing a football",
				imagePositionOverride: [1, 1],
			},
			logoSettings: {
				logo: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428220/image_64_dttkpi.png",
					width: 200,
					height: 200,
				},
				alt: "University of Iowa logo",
				logoPositionOverride: [1, 1],
			},
			playerName: "Mark Gronowski",
			affiliation: "University of Iowa",
			quote: '"Preston has been a huge part in my development. His attention to detail and passion for football is like no other."',
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746083076/Jayden_Reed_ayhvrw.jpg",
					width: 1280,
					height: 693,
				},
				alt: "Jayden Reed throwing a football",
				imagePositionOverride: [1, 1],
			},
			logoSettings: {
				logo: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428222/image_67_cjea6q.png",
					width: 200,
					height: 200,
				},
				alt: "Green Bay Packers Logo",
				logoPositionOverride: [1, 1],
			},
			playerName: "Jayden Reed",
			affiliation: "Green Bay Packers",
			quote: "“I can honestly say [Coach Kofi Hughes] is like my brother. He’s taught me more things off the field than on the field. Just living right. Little things like that.”",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746080749/Colton_Gumino_xmlftg.jpg",
					width: 1280,
					height: 693,
				},
				alt: "Colton Gumino holding a football looking downfield at training",
				imagePositionOverride: [1, 1],
			},
			logoSettings: {
				logo: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428223/image_70_oqek38.png",
					width: 200,
					height: 200,
				},
				alt: "Univeristy of California Los Angeles Logo",
				logoPositionOverride: [1, 1],
			},
			playerName: "Colton Gumino",
			affiliation: "Univeristy of California Los Angeles",
			quote: '"Preston helped elevate my game over the last 12 years. I wouldn’t be where I am without him. The best of the best!"',
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
	mainHeading: "Book Your First Session Now",
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "/schedule/chicago",
	},
};
