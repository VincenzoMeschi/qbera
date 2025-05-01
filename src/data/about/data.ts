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
				url: "/schedule/chicago",
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
		url: "/schedule/chicago",
	},
};

export const testimonialData: TestimonialSectionProps = {
	pageHeading: {
		mainHeading: `What's The Secret?`,
		subText:
			"Our guys put in the work. We just provide the guidence and scenarios to maximize their effort - and it works. Don't believe us? Hear what our guys have to say.",
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
