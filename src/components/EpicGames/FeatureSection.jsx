
import FeatureCard from "./FeatureCard";
import FeatureImg1 from '../assets/FeatureImg1.png'
import FeatureImg2 from '../assets/FeatureImg2.png'
import FeatureImg3 from '../assets/FeatureImg3.png'

const features = [
  {
    image:FeatureImg1,
    description:
      "Explore large, destructible environments where no two games are ever the same.",
  },
  {
    image:FeatureImg2,
    description:
      "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale",
  },
  {
    image:FeatureImg3,
    description:
      "Discover even more ways to play across thousands of creator-made game genres",
  },
];

function FeatureSection() {
  return (
    <section className="flex items-center self-center mt-48 max-w-full w-[1143px] px-2.5 :mt-10">
      <div className="flex gap-5 max-sm:flex-col max-sm:gap-0">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
