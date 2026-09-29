"use client";
import React, { useRef } from "react";

interface CircularTextProps {
	text: string;
	spinDuration?: number;
	onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
	className?: string;
}

// Hover playback rates relative to the base spin speed.
const hoverRates: Record<NonNullable<CircularTextProps["onHover"]>, number> = {
	slowDown: 0.5,
	speedUp: 4,
	pause: 0,
	goBonkers: 20,
};

// Spins via a compositor-only CSS animation. Hover speed changes go through the
// Web Animations API (updatePlaybackRate), so there are no per-frame React
// re-renders and no jump when the rate changes.
const CircularText: React.FC<CircularTextProps> = ({
	text,
	spinDuration = 20,
	onHover = "speedUp",
	className = "",
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const letters = Array.from(text);

	const setRate = (rate: number) => {
		ref.current
			?.getAnimations()
			.forEach((animation) => animation.updatePlaybackRate(rate));
	};

	return (
		<div
			ref={ref}
			className={`mx-auto rounded-full w-[150px] h-[150px] text-accent font-black text-center cursor-pointer origin-center ${className}`}
			style={{
				animation: `circular-text-spin ${spinDuration}s linear infinite`,
			}}
			onMouseEnter={() => setRate(hoverRates[onHover])}
			onMouseLeave={() => setRate(1)}>
			{letters.map((letter, i) => {
				const rotation = (360 / letters.length) * i;
				const factor = Number((Math.PI / letters.length).toFixed(0));
				const x = factor * i;
				const y = factor * i;
				const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

				return (
					<span
						key={i}
						className="absolute inline-block inset-0 text-sm uppercase"
						style={{ transform, WebkitTransform: transform }}>
						{letter}
					</span>
				);
			})}
		</div>
	);
};

export default CircularText;
