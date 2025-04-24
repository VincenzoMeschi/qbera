import React from "react";

import Image from "next/image";
import { FooterProps } from "@/Footer/config";
import { MainGrid } from "@/components/MainGrid/Component";
import { SubscriptionForm } from "@/components/SubscriptionForm/Component";

export const Footer: React.FC<FooterProps> = ({ top, bottom }) => {
	const { firstThird, secondThird, thirdThird } = top;
	return (
		<div className="w-full h-full">
			<div className="mx-2 mb-4 bg-foreground rounded-[2.5rem]">
				<MainGrid>
					<div className="contents">
						<div className="col-span-4 sm:col-span-6 lg:col-span-4 py-16">
							<div className="flex flex-col gap-3">
								<Image
									src={"/QB_Era_Logo_Red.png"}
									alt={firstThird.alt}
									className="w-48"
									width={500}
									height={100}
								/>
								<p className="text-secondary text-xs w-[80%]">
									{firstThird.companyInfo}
								</p>
							</div>
						</div>
						<div className="col-span-4 sm:col-span-6 lg:col-span-4 flex py-16">
							<div className="w-1/2 flex flex-col">
								<h6 className="text-secondary pb-6 uppercase">
									{secondThird.firstLabel}
								</h6>
								<ul className="list-disc text-secondary pl-5">
									{secondThird.quickLinks.map((link, i) => {
										return (
											<li key={i}>
												<a
													href={link.url}
													className="text-secondary text-xs">
													{link.label}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
							<div className="w-1/2 flex flex-col">
								<h6 className="text-secondary pb-6 uppercase">
									{secondThird.secondLabel}
								</h6>
								<ul className="gap-2 space-y-4">
									<li>
										<div className="flex items-center gap-4">
											<div className="flex items-center justify-center w-6 h-6 bg-secondary rounded-full">
												<secondThird.contactInfo.phone.icon className="scale-[.8]" />
											</div>
											<a
												href={`tel:${secondThird.contactInfo.phone.phoneNumber}`}
												className="text-secondary text-xs">
												{
													secondThird.contactInfo
														.phone.phoneNumber
												}
											</a>
										</div>
									</li>
									<li>
										<div className="flex items-center gap-4">
											<div className="flex items-center justify-center w-6 h-6 bg-secondary rounded-full">
												<secondThird.contactInfo.email.icon className="scale-[.8]" />
											</div>
											<a
												href={`mailto:${secondThird.contactInfo.email.emailAddress}`}
												className="text-secondary text-xs">
												{
													secondThird.contactInfo
														.email.emailAddress
												}
											</a>
										</div>
									</li>
									<li>
										<div className="flex items-center gap-4">
											<div className="flex items-center justify-center w-6 h-6 bg-secondary rounded-full">
												<secondThird.contactInfo.address.icon className="scale-[.8]" />
											</div>

											<p className="text-secondary text-xs">
												{
													secondThird.contactInfo
														.address.physicalAddress
												}
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-span-4 sm:col-span-6 lg:col-span-4 py-16">
							<div className="flex flex-col pl-20">
								<h6 className="text-secondary pb-6 uppercase">
									{thirdThird.label}
								</h6>
								<SubscriptionForm {...thirdThird} />
							</div>
						</div>
					</div>
					<hr className="bg-secondary w-full h-px col-span-4 sm:col-span-6 lg:col-span-12" />
					<div className="col-span-4 sm:col-span-6 lg:col-span-12 flex h-fit justify-between items-center pb-4">
						<p className="text-secondary text-xs">
							{bottom.copyright}
						</p>
						<div className="flex gap-2 items-center">
							{bottom.socials.map((social, i) => {
								return (
									<div className="text-primary" key={i}>
										<a
											href={social.url}
											className="w-6 h-6 flex items-center justify-center bg-secondary rounded-full">
											<social.logo className="scale-[.8]" />
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</MainGrid>
			</div>
		</div>
	);
};
