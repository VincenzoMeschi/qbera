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
				"Our mission is to develop and foster organic relationships with our athletes through our unique well-rounded training program. We want to put our athletes in a position to succeed, not just in football, but as a leader in life. We put high expectations on our athletes as we see them as extensions of us as a whole! We are family, to put it simply!",
		},
		secondThird: {
			firstLabel: "Quick Links",
			quickLinks: [
				{
					label: "Home",
					url: "/schedule/chicago",
				},
				{
					label: "About Us",
					url: "/schedule/chicago",
				},
				{
					label: "Coaches",
					url: "/schedule/chicago",
				},
				{
					label: "Training",
					url: "/schedule/chicago",
				},
				{
					label: "Locations",
					url: "/schedule/chicago",
				},
			],
			secondLabel: "Contact Links",
			contactInfo: {
				phone: {
					icon: Phone,
					phoneNumber: "(630)290-1120",
				},
				email: {
					icon: Email,
					emailAddress: "info@qb-era.com",
				},
				address: {
					icon: LocationCity,
					physicalAddress:
						"551 Roosevelt Rd Unit #214, Glen Ellyn, IL 60137",
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
				url: "/schedule/chicago",
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
			image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746080300/USC_Logo_vekgf2.png",
			alt: "University of Southern California Logo",
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
				"Coach Preston is our lead coach with over 20 years combined of Coaching/playing experience. He has served in almost all college coaching roles with over 15 years of collegiate coaching experience. His coaching background includes athletes from some of the highest programs in the country, including Alabama, UCLA, Northwestern, Purdue, LA Chargers, Las Vegas Raiders, and many more. QB Coach Preston’s extensive background has earned him the title of being one of the top QB coaches in the country with countless college coach connections.",
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
				"Coach Ryan Sample is one of our veteran coaches at QB Era. Coach Sample re-wrote nearly the entire record book for quarterbacks during his three years as a starter at Benedictine University. Sample holds career records for passing yards, touchdowns, completions, and attempts at Benedictine. Coach Sample won the German Bowl overseas in Germany playing in the GFL. Over the last 15 years, Coach Sample has experience coaching ALL levels of football. He recently resigned as the Assistant Offensive Coordinator at Benedictine University to join us as a FULL-TIME QB Era Coach. ",
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
				"Kofi is our lead Wide Receiver Coach and CEO of Athletes they Fear. Athletes they Fear is a non-profit program focused on developing our youth on/off the playing field. In partnership with QB-Era, Kofi and the Athletes they Fear serves over 100 D1 current athletes and hundreds of the top youth/high school athletes in the area. Kofi Hughes played 4 years in the Big Ten Conference at Indiana University. He was a three-year captain at WR and ranked eighth in yardage and tenth in receptions all-time there. He spent time in the NFL with the Texans, Redskins, and Bears.",
		},

		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746070563/Jarred_Park_fwbiku.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Jarred Park critiquing a quarterback at a training session",
				imagePositionOverride: [1, 1],
			},

			mainHeading: "Jarred Park",
			subText:
				"QB Coach Jarred is one of our most tenured coaches/ in our program. Coach Jarred played at College of Dupage and helped lead them to the 2021 NJCAA National Championship. Earning a Scholarship to play at McKendree University outside of St. Louis. Coach Jarred has spent the last couple years working with and developing quarterbacks in Texas. His current athletes include: Fernando Mendoza (Indiana University), Quinn Ewers (Miami Dolphins), Josh Hoover (TCU), Drew Mestemaker (UNT), Chaston Ditta (East Carolina), Trey Lance (LA Chargers), Kane Archer (UCF), and more.",
		},
	],
};
