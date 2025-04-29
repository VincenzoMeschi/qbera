import { LowImpactHeaderProps } from "@/Header/LowImpact/config";
import { ContactSectionProps } from "@/sections/ContactSection/config";
import { CTASectionProps } from "@/sections/CTASection/config";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const heroData: LowImpactHeaderProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745959513/Contact_Hero_vrzeks.jpg",
			height: 1224,
			width: 1920,
		},
		alt: "Eddie Garcia pointing to the screen at a QB Era training session with quarterback Matt Morrsisy in the background",
		imagePositionOverride: [0, 0.5],
	},
	mainHeading: "Contact",
};

export const contactSectionData: ContactSectionProps = {
	imageSettings: {
		image: {
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745959600/Contact_Form_Image_czfpex.jpg",
			width: 1920,
			height: 2050,
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
			src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745959671/Kofi_Contact_CTA_mwimvl.jpg",
			height: 1258,
			width: 1920,
		},
		alt: "Coach Kofi Hughes holding a stack of training cones while setting up a drill for his wide receivers at a QB Era training session",
	},
	ctaButton: {
		icon: ArrowOutwardIcon,
		label: "Download",
		url: "https://youtube.com",
	},
};
