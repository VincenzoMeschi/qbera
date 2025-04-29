import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import { TrainingSectionProps } from "@/sections/TrainingSection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745508635/Training_Hero_bbejm6.jpg",
			height: 1052,
			width: 2560,
		},
		alt: "Wide Receiver mid-stride running a route at QB Era training academy",
		imagePositionOverride: [0.4, 1],
	},
	mainHeading: "Training",
};

export const trainingData: TrainingSectionProps = {
	trainingCards: [
		{
			imagePosition: "left",
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745959152/Sunday_Training_Training_dstuql.jpg",
					width: 1920,
					height: 1942,
				},
				alt: "Three quarterbacks at QB Era are dropping back together during a drill looking downfield at potential receivers",
			},
			content: {
				mainHeading: "Sunday Group Sessions",
				subHeading: "Our Biggest Weekly Training Sessions",
				description:
					"Each session is built around a comprehensive curriculum that challenges athletes to think critically, move fluidly, and react instinctively under pressure. By focusing on the essential elements of quarterback play, we create a well-rounded development process that goes beyond just throwing the ball; we prepare athletes to lead with confidence and composure in any situation.",
				ctaButton: {
					icon: ArrowOutwardIcon,
					label: "Get Started",
					url: "https://youtube.com",
				},
			},
		},
		{
			imagePosition: "right",
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745958808/Small_Group_Training_sbou59.jpg",
					width: 1920,
					height: 1945,
				},
				alt: "Three quarterbacks at QB Era are dropping back together during a drill looking downfield at potential receivers",
			},
			content: {
				mainHeading: "Small Group Sessions",
				subHeading: "Intimate Traning Throughout The Week",
				description:
					"Our small group sessions offer an exclusive, focused training environment where quarterbacks receive personalized attention while benefiting from the energy and camaraderie of training alongside like-minded athletes. With a limited group size, each player is able to work closely with our expert coaches, ensuring that specific areas of development—whether it's footwork, mechanics, or decision-making—are addressed with precision. These sessions create a unique balance of individual focus and collaborative learning, allowing athletes to push each other, share insights, and build chemistry while still receiving customized feedback.",
				ctaButton: {
					icon: ArrowOutwardIcon,
					label: "Get Started",
					url: "https://youtube.com",
				},
			},
		},
		{
			imagePosition: "left",
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745958649/Wide_Receiver_Cutting_x5l9wi.jpg",
					width: 1920,
					height: 1945,
				},
				alt: "Wide Receiver cutting into a break when approaching speed cones in a drill",
			},
			content: {
				mainHeading: "Wide Receiver Sessions",
				subHeading: "Weekly Sessions Focused On Wide Receivers",
				description:
					"Our weekly wide receiver training program is built on mastering the true fundamentals of the position. Each session is carefully structured to reinforce the core techniques that every great receiver needs—precise route running, clean footwork, strong hands, and the ability to create separation. We focus on the basics first, teaching proper stance, release mechanics, and how to attack leverage, ensuring that athletes build a solid foundation that can support more advanced skills. Every drill is designed with purpose, allowing receivers to develop muscle memory and confidence in the details that matter most on game day. In addition to physical reps, we emphasize football IQ and situational awareness, helping receivers understand coverages, timing, and spacing within the offense. Our program includes breakdowns of route concepts, reading defensive alignments, and making smart adjustments mid-play. We believe that true fundamentals go beyond physical ability—they also include discipline, consistency, and a high-level understanding of the game. Whether you're new to the position or looking to refine your technique, our training ensures you leave every session sharper, more confident, and more prepared to perform at a high level.",
				ctaButton: {
					icon: ArrowOutwardIcon,
					label: "Get Started",
					url: "https://youtube.com",
				},
			},
		},
	],
};

export const ctaData: CTASectionProps = {
	mainHeading: "Chase Your Dream",
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745959453/Training_CTA_avfn0r.jpg",
			height: 754,
			width: 2560,
		},
		alt: "Wide Receiver looking off to the side with a long-exposure style background of streaked lighting",
	},
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Get Started",
		url: "https://youtube.com",
	},
};
