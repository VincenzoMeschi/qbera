import { cn } from "@/lib/utils";
import React from "react";

export const MainGrid: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"mx-auto max-w-[81.25rem] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-5 px-8 xl:px-2",
				className
			)}
			{...props}>
			{children}
		</div>
	);
};
