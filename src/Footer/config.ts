import { IconComponent } from "@/components/Icons/Component";

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
					icon: IconComponent;
					phoneNumber: string;
				};
				email: {
					icon: IconComponent;
					emailAddress: string;
				};
				address: {
					icon: IconComponent;
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
			logo: IconComponent;
			url: string;
		}[];
	};
};
