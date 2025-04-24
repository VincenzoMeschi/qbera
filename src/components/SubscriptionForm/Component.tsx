"use client";
import React from "react";

import { SubscriptionFormProps } from "./config";

export const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
	inputPlaceholder,
	submitButtonLabel,
}) => {
	return (
		<form className="space-y-3">
			<input
				type="email"
				name="email"
				id="email"
				className="text-secondary text-xs bg-transparent border border-secondary rounded-lg pl-5 p-2 w-full"
				placeholder={inputPlaceholder}
			/>
			<button
				type="submit"
				className="text-primary text-xs bg-secondary rounded-lg p-2 w-full"
				onClick={(e) => e.preventDefault()}>
				{submitButtonLabel}
			</button>
		</form>
	);
};
