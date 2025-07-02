import { LogoSliderProps } from "@/components/LogoSlider/config";
import { FooterProps } from "@/Footer/config";
import { CoachesSectionProps } from "@/sections/CoachesSection/config";
import {
	Facebook,
	X,
	Instagram,
	Phone,
	Email,
	LocationCity,
} from "@mui/icons-material";

export const footerData: FooterProps = {
	top: {
		firstThird: {
			alt: "QB Era logo red variant",
			downloadImage: {
				apple: {
					image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1746574928/Download_on_the_App_Store_RGB_blk.svg_zfgbfx.png",
					url: "https://apps.apple.com/us/app/qb-era/id6745488226",
				},
				android: {
					image: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1748809820/Google_Play_Store_badge_EN.svg_bx9upb.png",
					url: "https://play.google.com/store/apps/details?id=com.fitnessmobileapps.qberallc41844&pcampaignid=web_share&pli=1",
				},
			},
		},
		secondThird: {
			firstLabel: "Quick Links",
			quickLinks: [
				{
					label: "Home",
					url: "/",
				},
				{
					label: "About Us",
					url: "/about-us",
				},
				{
					label: "Training",
					url: "/training",
				},
				{
					label: "Locations",
					url: "/locations",
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
				url: "https://www.facebook.com/profile.php?id=61575628481036",
			},
			{
				logo: X,
				url: "https://x.com/EraQb67104",
			},
			{
				logo: Instagram,
				url: "https://www.instagram.com/qb_era/",
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
				"Coach Preston serves as our lead quarterbacks coach, bringing over 20 years of combined playing and coaching experience to the program. With more than 15 years of collegiate coaching under his belt, he has held a wide range of roles at the college level, contributing to the development of athletes across multiple positions. His coaching resume includes work with players from some of the nation’s premier programs and professional organizations, including Alabama, UCLA, Northwestern, Purdue, the Los Angeles Chargers, and the Las Vegas Raiders, among others. Coach Preston's depth of experience and strong network within the collegiate coaching community have earned him recognition as one of the top quarterback coaches in the country.",
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
				"Coach Ryan Sample brings a distinguished playing and coaching background to our staff. As a standout quarterback at Manteno High School, he amassed 6,556 passing yards and 65 touchdowns—ranking 14th all-time in Illinois High School Association (IHSA) history at the time of his graduation. In college, Sample was a four-year starter, throwing for 9,996 yards and 99 touchdowns over 41 starts. Following his collegiate career, he played professionally in Europe, where he led teams in both Germany and the Czech Republic to league championships. Most recently, Coach Sample served as the quarterbacks coach and pass game coordinator at Benedictine University. He joins our program with 11 years of experience coaching quarterbacks, including four years at the collegiate level.",
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
				"Kofi Hughes serves as our lead Wide Receivers Coach and is the CEO of Athletes They Fear, a nonprofit organization dedicated to developing youth both on and off the field. In partnership with QB-Era, Athletes They Fear supports over 100 current Division I athletes and hundreds of top youth and high school players across the region. Kofi played four years in the Big Ten Conference at Indiana University, where he was a three-year team captain at wide receiver. He concluded his collegiate career ranked eighth all-time in receiving yards and tenth in receptions in program history. Following college, Kofi spent time in the NFL with the Houston Texans, Washington Redskins, and Chicago Bears.",
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
				"Coach Jarred is one of the most experienced and respected members of our program, both as a coach and a former athlete. He played quarterback at the College of DuPage, where he played a key role in leading the team to the 2021 NJCAA National Championship. His performance earned him a scholarship to continue playing quarterback at McKendree University, located just outside of St. Louis. In recent years, Coach Jarred has dedicated himself to the development of quarterbacks in Texas, working with a range of elite athletes. His current and former trainees include Fernando Mendoza (Indiana University), Quinn Ewers (Miami Dolphins), Josh Hoover (TCU), Drew Mestemaker (University of North Texas), Chaston Ditta (East Carolina University), Kane Archer (University of Central Florida), among others.",
		},
		{
			imageSettings: {
				image: {
					src: "https://res.cloudinary.com/dbxthl3yh/image/upload/v1748810889/Sean_Anderson_guld5f.jpg",
					height: 2432,
					width: 1920,
				},
				alt: "Coach Sean Anderson coaching a quarterback at a training session",
				imagePositionOverride: [1, 1],
			},

			mainHeading: "Sean Anderson",
			subText:
				"Sean Anderson is the Offensive Coordinator and Quarterback Coach at perennial Illinois powerhouse Batavia High School, where he has helped guide the program to multiple state championship appearances and victories. At Batavia Sean has played a key role in the development of multiple All-State QBs.  Sean has nearly 15 years of experience coaching quarterbacks where he has worked with all levels of QBs from youth to NFL. A former University of Illinois quarterback, Sean began his collegiate career as a walk-on and earned a scholarship through hard work and dedication. He is passionate about mentoring and preparing the next generation of elite quarterback talent.",
		},
	],
};
