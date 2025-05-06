import { SvgIconComponent } from "@mui/icons-material";

export type FooterProps = {
	top: {
		firstThird: {
			alt: string;
			downloadImage: {
				apple: {
					image: string;
					url: string;
				};
				android: {
					image: string;
					url: string;
				};
			};
		};
		secondThird: {
			firstLabel: string;
			quickLinks: { label: string; url: string }[];
			secondLabel: string;
			contactInfo: {
				phone: {
					icon: SvgIconComponent;
					phoneNumber: string;
				};
				email: {
					icon: SvgIconComponent;
					emailAddress: string;
				};
				address: {
					icon: SvgIconComponent;
					physicalAddress: string;
				};
			};
		};
		thirdThird: {
			label: string;
			inputPlaceholder: string;
			submitButtonLabel: string;
		};
	};
	bottom: {
		copyright: string;
		socials: {
			logo: SvgIconComponent;
			url: string;
		}[];
	};
};
