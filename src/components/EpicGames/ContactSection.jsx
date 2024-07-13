

function ContactSection() {
  return (
    <section className="flex flex-col items-center mt-80 max-md:mt-32">
      <h2 className="text-5xl font-light tracking-wider text-center text-white capitalize leading-[48.15px] max-md:max-w-full max-md:text-3xl max-sm:mx-auto max-sm:text-xl max-sm:text-center">
        Interested in delving deeper into the project?
      </h2>
      <p className="mt-14 text-3xl font-light text-center text-white w-[864px] max-md:mt-10 max-md:max-w-full max-md:text-xl max-sm:mt-4 max-sm:text-base">
        If you'd like to explore further details about our initiatives or any of
        our affiliated brands, don't hesitate to connect. You can reach out to
        us via email at <span className="font-medium">hello@abc.com</span> or
        give us a call at <span className="font-medium">+9148020802730.</span>
      </p>
      <div className="flex gap-5 mt-20 max-w-full text-lg font-medium tracking-wider text-center w-[782px] max-md:flex-wrap max-md:mt-10">
        <a
          href="#"
          className="flex flex-col grow shrink-0 justify-center text-white basis-0 w-fit"
        >
          <div className="justify-center items-center  py-5 border border-white border-solid max-md:px-4 max-sm:px-3 max-sm:py-4">
            Ring us on Skype
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col grow shrink-0 justify-center text-white basis-0 w-fit bg-white"
        >
          <div className="justify-center items-center text-black  py-5 border border-white border-solid max-md:px-4 max-sm:px-3 max-sm:py-4">
          Contact Us
          </div>
          
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
