import HeroImg from '../assets/HeroSection.png' 

function HeroSection() {
  return (
    <section className="flex flex-col items-center self-center mt-14 w-full max-w-[1415px] max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl font-extralight tracking-wider leading-10 text-center text-white capitalize max-md:max-w-full max-md:text-3xl max-md:tracking-wider max-md:leading-10 max-sm:text-2xl max-sm:leading-9">
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </h1>
      <img
        loading="lazy"
        src={HeroImg}
        alt="Epic Games showcase"
        className="self-stretch mt-12 w-full aspect-[2.86] max-md:mt-10 max-md:max-w-full"
      />
      <p className="mt-14 text-lg text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-base">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <a
        href="#"
        className="justify-center items-center px-16 py-6 mt-14 max-w-full text-xl tracking-wider text-center text-black bg-white w-[416px] max-md:px-5 max-md:mt-10"
      >
        Visit Website
      </a>
    </section>
  );
}

export default HeroSection;
