import { LogoSliderProps } from "@/components/LogoSlider/config";
import { FooterProps } from "@/Footer/config";
import { CoachesSectionProps } from "@/sections/CoachesSection/config";
import {
	Facebook,
	X,
	YouTube,
	Instagram,
	Phone,
	Email,
	LocationCity,
} from "@mui/icons-material";

export const footerData: FooterProps = {
	top: {
		firstThird: {
			alt: "QB Era logo red variant",
			companyInfo:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est neque, tempor vel augue a, iaculis maximus est. Vivamus malesuada enim in elit scelerisque venenatis. ",
		},
		secondThird: {
			firstLabel: "Quick Links",
			quickLinks: [
				{
					label: "Home",
					url: "https://youtube.com",
				},
				{
					label: "About Us",
					url: "https://youtube.com",
				},
				{
					label: "Coaches",
					url: "https://youtube.com",
				},
				{
					label: "Training",
					url: "https://youtube.com",
				},
				{
					label: "Locations",
					url: "https://youtube.com",
				},
			],
			secondLabel: "Contact Links",
			contactInfo: {
				phone: {
					icon: Phone,
					phoneNumber: "(999)999-9999",
				},
				email: {
					icon: Email,
					emailAddress: "info@qb-era.com",
				},
				address: {
					icon: LocationCity,
					physicalAddress: "1566 E Trade St. Aurora, IL 60564",
				},
			},
		},
		thirdThird: {
			label: "Subscribe for Updates",
			inputPlaceholder: "example@qb-era.com",
			submitButtonLabel: "Subscribe Now",
		},
	},
	bottom: {
		copyright: "Copyright 2025 © QB Era, All Right Reserved",
		socials: [
			{
				logo: Facebook,
				url: "https://facebook.com",
			},
			{
				logo: X,
				url: "https://x.com",
			},
			{
				logo: YouTube,
				url: "https://youtube.com",
			},
			{
				logo: Instagram,
				url: "https://instagram.com",
			},
		],
	},
};

export const logoSliderData: LogoSliderProps = {
	logos: [
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428219/image_63_jtbezz.png",
			alt: "Michigan Panthers Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428220/image_64_dttkpi.png",
			alt: "University of Iowa Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428220/image_65_uxwyd3.png",
			alt: "Northwestern University Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428221/image_66_rmztu6.png",
			alt: "Las Vegas Raiders Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428222/image_67_cjea6q.png",
			alt: "Green Bay Packers Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428225/image_68_aa32gq.png",
			alt: "University of Oregon Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428224/image_69_uz9n2w.png",
			alt: "Oklahoma State University Logo",
		},
		{
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428223/image_70_oqek38.png",
			alt: "Univeristy of California Los Angeles Logo",
		},
	],
};

export const coachesData: CoachesSectionProps = {
	coach: [
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428690/Preston_Earl_md1gwz.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Preston Earl instructing a sunday training session of quarterbacks",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Preston Earl",
			subText:
				"Donec id ultrices ligula. Aliquam ut lorem fermentum, ultricies nisl quis, condimentum augue. Aliquam massa quam, sollicitudin vel congue a, aliquet quis nulla. Nam tincidunt quam sem, interdum tristique orci posuere vitae. Sed non elit eu sem mattis dignissim sit amet eget est.",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428832/Ryan_Sample_xnqsv9.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Ryan Sample coaching a sunday session of quarterbacks at QB Era",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Ryan Sample",
			subText:
				"Donec id ultrices ligula. Aliquam ut lorem fermentum, ultricies nisl quis, condimentum augue. Aliquam massa quam, sollicitudin vel congue a, aliquet quis nulla. Nam tincidunt quam sem, interdum tristique orci posuere vitae. Sed non elit eu sem mattis dignissim sit amet eget est.",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745428937/Kofi_Hughes_o6n9tr.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Kofi Hughes holding a stack of training cones, setting up a drill for his saturday group of wide receivers.",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Kofi Hughes",
			subText:
				"Donec id ultrices ligula. Aliquam ut lorem fermentum, ultricies nisl quis, condimentum augue. Aliquam massa quam, sollicitudin vel congue a, aliquet quis nulla. Nam tincidunt quam sem, interdum tristique orci posuere vitae. Sed non elit eu sem mattis dignissim sit amet eget est.",
		},

		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745429045/Jarred_Park_evmzqj.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Jarred Park critiquing a quarterback at a training session",
				imagePositionOverride: [1, 1],
			},

			mainHeading: "Jarred Park",
			subText:
				"Donec id ultrices ligula. Aliquam ut lorem fermentum, ultricies nisl quis, condimentum augue. Aliquam massa quam, sollicitudin vel congue a, aliquet quis nulla. Nam tincidunt quam sem, interdum tristique orci posuere vitae. Sed non elit eu sem mattis dignissim sit amet eget est.",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1745429135/Evan_Bernard_onqxkl.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Evan Bernard crossing his arms while evaluating a quarterback at a training session",
				imagePositionOverride: [1, 1],
			},
			mainHeading: "Evan Bernard",
			subText:
				"Donec id ultrices ligula. Aliquam ut lorem fermentum, ultricies nisl quis, condimentum augue. Aliquam massa quam, sollicitudin vel congue a, aliquet quis nulla. Nam tincidunt quam sem, interdum tristique orci posuere vitae. Sed non elit eu sem mattis dignissim sit amet eget est.",
		},
	],
};
