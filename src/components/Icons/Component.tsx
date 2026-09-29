import React from "react";
import { cn } from "@/lib/utils";

// Lightweight replacements for the @mui/icons-material icons we used.
// Same Material Design SVG paths (Apache 2.0) and same default sizing as MUI's
// SvgIcon (1.5rem, 1em box, currentColor fill), without pulling in
// @mui/material + emotion at runtime.

export type IconComponent = React.FC<{ className?: string }>;

const createIcon = (path: string, displayName: string): IconComponent => {
	const Icon: IconComponent = ({ className }) => (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			focusable="false"
			className={cn(
				"inline-block size-[1em] shrink-0 select-none fill-current text-[1.5rem]",
				className
			)}>
			<path d={path} />
		</svg>
	);
	Icon.displayName = displayName;
	return Icon;
};

export const ArrowOutwardIcon = createIcon(
	"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	"ArrowOutwardIcon"
);

export const MenuIcon = createIcon(
	"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z",
	"MenuIcon"
);

export const CloseIcon = createIcon(
	"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
	"CloseIcon"
);

export const FormatQuoteIcon = createIcon(
	"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z",
	"FormatQuoteIcon"
);

export const PhoneIcon = createIcon(
	"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z",
	"PhoneIcon"
);

export const EmailIcon = createIcon(
	"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z",
	"EmailIcon"
);

export const LocationCityIcon = createIcon(
	"M15 11V5l-3-3-3 3v2H3v14h18V11zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z",
	"LocationCityIcon"
);

export const FacebookIcon = createIcon(
	"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z",
	"FacebookIcon"
);

export const XIcon = createIcon(
	"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
	"XIcon"
);

export const InstagramIcon = createIcon(
	"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
	"InstagramIcon"
);
