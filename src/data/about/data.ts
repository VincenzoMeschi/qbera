import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { AboutUsProps } from "@/sections/AboutSection/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import { GiantCTASectionProps } from "@/sections/GiantCTASection/config";
import { TestimonialSectionProps } from "@/sections/TestimonialSection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746117563/Ryan_Sample_HERO_ag2uew.jpg",
			height: 916,
			width: 2560,
		},
		alt: "Ryan Sample coaching at a session at QB Era",
		imagePositionOverride: [0.6, 0.2],
	},
	mainHeading: "About Us",
};

export const aboutUsData: AboutUsProps = {
	isHomePage: false,
	leftSide: {
		mainHeading: "We Set The Standard",
		subText:
			"At the heart of our program lies a simple belief: greatness is earned through relentless effort, disciplined habits, and a champion's mindset. While talent may open the door, it’s the dedication to every rep, the work done when no one is watching, and the pursuit of constant improvement that truly sets elite quarterbacks apart. Our training philosophy is built on the conviction that every quarterback has the potential to be exceptional. We go beyond mechanics, focusing not only on technical precision but also on mental toughness, football intelligence, and leadership development. Each session is crafted to challenge and inspire, combining cutting-edge techniques with proven fundamentals that stand the test of time. We tailor our programs to meet each athlete where they are, pushing them past their comfort zones while laying a solid foundation of skills. Whether it's refining footwork, perfecting throwing mechanics, or expanding football IQ, we emphasize a holistic approach to quarterback development. True excellence isn’t defined solely by on-field success—it's about developing leaders who embrace adversity, outwork the competition, and carry themselves with integrity both on and off the field.",
		ctaButton: {
			icon: ArrowOutwardIcon,
			url: "/schedule/chicago",
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
		url: "/schedule/chicago",
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
		url: "/schedule/chicago",
	},
};
