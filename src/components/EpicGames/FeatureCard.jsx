

function FeatureCard({ image, description }) {
  return (
    <div className="flex flex-col w-[33%] ease-out duration-300 hover:w-[50%] max-md:ml-0 max-md:w-full max-md:hover:w-[150%] max-sm:hover:w-[100%]">
      <div className="flex flex-col text-xl font-light tracking-wide text-center text-white capitalize max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          alt="Feature illustration"
          className="w-full aspect-square"
        />
        <p className="self-center font-roboto mt-9 max-md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
