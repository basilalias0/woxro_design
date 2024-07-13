
import FeatureCard from "./FeatureCard";

const features = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e64018205938fb5647502e00891be1876ea01d9eb9857d8f6f83f1590bbbaa50?apiKey=5c025788d7dd4263bf85a4f7bfa9ed1a&",
    description:
      "Explore large, destructible environments where no two games are ever the same.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5384cf89d6792b5547fe9e64eecae0553a1b4ac00a0ed03d36cf2e6b3ec49546?apiKey=5c025788d7dd4263bf85a4f7bfa9ed1a&",
    description:
      "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/da880c10dbd330f12bac2e7528d9c542e662501af99f195e0d7c6bc2185bfa1a?apiKey=5c025788d7dd4263bf85a4f7bfa9ed1a&",
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
