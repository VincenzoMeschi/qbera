
import { TrainingSectionProps } from "@/sections/TrainingSection/config";
import { MainGrid } from "@/components/MainGrid/Component";


import { TrainingCard } from "@/components/TrainingCard/Component";

export const TrainingSection: React.FC<TrainingSectionProps> = ({
	trainingCards,
}) => {
	return (
		<div className="w-full h-full">
			<MainGrid className="gap-y-24">
				{trainingCards.map((card, i) => {
					return <TrainingCard key={i} {...card} />;
				})}
			</MainGrid>
		</div>
	);
};
