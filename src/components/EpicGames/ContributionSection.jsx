
import StatCard from "./StatCard";

const stats = [
  { value: "5M", description: "Daily User Engagements" },
  { value: "$500K", description: "Revenue Surge for an Platform" },
  { value: "10X", description: "ROAS on all our marketing campaigns" },
];

function ContributionSection() {
  return (
    <section className="flex flex-col items-center mt-52 max-md:mt-24">
      <h2 className="text-5xl font-extralight leading-10 text-white capitalize max-md:text-4xl">
        Our Contribution
      </h2>
      <p className="mt-10 text-lg text-center text-white w-[1142px] max-md:max-w-full">
        Our core offering extends beyond mere profit generation; we emphasize
        the growth and active involvement of our user community. Collaborating
        with us represents an investment, rather than a mere expenditure. Our
        dedication to providing distinctive digital interactions guarantees
        unparalleled benefits for our clientele.
      </p>
      <div className="mt-24 max-w-full w-[883px] max-md:px-2.5 max-md:mt-6 max-sm:flex max-sm:flex-col max-sm:-mb-1 max-sm:grow-0">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContributionSection;
