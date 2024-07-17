

function StatCard({ value, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-2 text-white max-md:mt-10 max-sm:flex max-sm:flex-col max-sm:self-center max-sm:ml-1.5 max-sm:w-auto">
        <div className="self-center text-7xl font-extralight leading-4 max-md:text-5xl max-sm:mt-1 max-sm:text-4xl font-roboto">
          {value}
        </div>
        <div className="mt-9 text-2xl font-light leading-6 text-center max-md:text-xl max-sm:mt-5 max-sm:text-lg max-sm:font-light max-sm:leading-5 max-sm:tracking-[2px] font-roboto">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
