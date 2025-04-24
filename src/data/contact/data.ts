import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { ContactSectionProps } from "@/sections/ContactSection/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://media.discordapp.net/attachments/605155201837694989/1364020527538241616/3T0A5554-192_1.png?ex=6808269c&is=6806d51c&hm=dfda0c9ddf1cedabc2aca65f857083bab09648b73836482f16938cbe1da8f6c1&=&format=webp&quality=lossless&width=1452&height=926",
			height: 926,
			width: 1452,
		},
		alt: "Eddie Garcia pointing to the screen at a QB Era training session with quarterback Matt Morrsisy in the background",
		imagePositionOverride: [0.6, 0.5],
	},
	mainHeading: "Contact",
};

export const contactSectionData: ContactSectionProps = {
	imageSettings: {
		image: {
			src: "https://media.discordapp.net/attachments/605155201837694989/1364028668892024852/3T0A3145-190.png?ex=68082e31&is=6806dcb1&hm=1c9cf2a47dbbcb9d4afb7aa165d05b1127bcc650d57020a630cf2a710c09c497&=&format=webp&quality=lossless&width=1060&height=1132",
			width: 1060,
			height: 1132,
		},
		alt: "Eddie Garcia, manager and co-owner of QB Era, standing in group photo with wide receivers from a group session",
		imagePositionOverride: [1, 1],
	},
	form: {
		formHeading: {
			mainHeading: "Got A Question?",
			subText:
				"Send us a message, and someone from the team will get back to you as soon as possible.",
		},
		formFields: [
			{
				type: "text",
				name: "firstName",
				placeholder: "First Name",
				width: "half",
			},
			{
				type: "text",
				name: "lastName",
				placeholder: "Last Name",
				width: "half",
			},
			{
				type: "email",
				name: "email",
				placeholder: "Email Address",
				width: "two-thirds",
			},
			{
				type: "select",
				name: "locations",
				placeholder: "Location",
				width: "one-third",
				options: [
					{ label: "Chicago, IL", value: "chicago" },
					{ label: "Dallas, TX", value: "dallas" },
				],
			},
			{
				type: "textarea",
				name: "message",
				placeholder: "Message",
				width: "full",
			},
		],
	},
};

export const ctaData: CTASectionProps = {
	mainHeading: "Download Our App",
	imageSettings: {
		image: {
			src: "https://media.discordapp.net/attachments/605155201837694989/1364037108720734218/3T0A3230-104_1.png?ex=6808360d&is=6806e48d&hm=68fb49daa217f0c007f08d6233fef866ff8a2a72faa67aa3201e58a0f728fe4a&=&format=webp&quality=lossless&width=1166&height=764",
			height: 766,
			width: 1166,
		},
		alt: "Coach Kofi Hughes holding a stack of training cones while setting up a drill for his wide receivers at a QB Era training session",
	},
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Download",
		url: "https://youtube.com",
	},
};
