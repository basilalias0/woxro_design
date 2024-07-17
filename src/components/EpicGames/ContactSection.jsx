

function ContactSection() {
  return (
    <section className="flex flex-col items-center mt-80 max-md:mt-32">
      <h2 className="text-5xl font-light  text-center text-white capitalize leading-[48.15px] max-md:max-w-full max-md:text-3xl max-sm:mx-auto max-sm:text-xl max-sm:text-center font-roboto">
        Interested in delving deeper into the project?
      </h2>
      <p className=" mt-14 w-auto text-3xl font-light text-center text-white max-w-[863px]  text-[28px] font-roboto ">
        If you'd like to explore further details about our initiatives or any of
        our affiliated brands, don't hesitate to connect. You can reach out to
        us via email at <span className="font-medium">hello@abc.com</span> or
        give us a call at <span className="font-medium">+91 480 20802730.</span>
      </p>
      <div className="flex gap-5 mt-20 max-w-full text-lg font-medium tracking-wider text-center w-[782px] max-md:flex-wrap max-md:mt-10">
        <a
          href="#"
          className="flex flex-col grow shrink-0 justify-center text-white basis-0 w-fit"
        >
          <div className="justify-center items-center  py-5 border border-white border-solid max-md:px-4 max-sm:px-3 max-sm:py-4 hover:bg-white hover:text-black hover:border  border-solid font-poppins ">
            Ring us on Skype
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col grow shrink-0 justify-center text-white basis-0 w-fit bg-white"
        >
          <div className="justify-center items-center text-black  py-5 border border-white border-solid max-md:px-4 max-sm:px-3 max-sm:py-4 hover:bg-black hover:text-white hover:border border-white border-solid font-poppins ">
          Contact Us
          </div>
          
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
