const Features = () => {
  return (
    <section className="mt-28">
      <div className="flex flex-col-reverse md:flex-row gap-10  md:items-center">
        <picture >
          <source
            srcset="assets/images/image-read-together-desktop.webp"
            aria-hidden="true"
            alt=""
            media="(min-width:800px)"
          />
          <source
            srcset="assets/images/image-read-together-tablet.webp"
            aria-hidden="true"
            alt=""
            media="(min-width:750px)"
          />

          <img
            src="assets/images/image-read-together-mobile.webp"
            aria-hidden="true"
            className="md:h-[560px] rounded-3xl"
          />
        </picture>
        <div className="md:ml-auto md:w-[400px]">
          <h2 className="text-[3rem] font-bold leading-none">Read together,<br/> grow together</h2>
          <ul className="mt-8 text-lg checkboxes">
            <li>Monthly curated tech reads selected by industry experts</li>
            <li>Virtual and in-person meetups for deep-dive discussions</li>
            <li>Early access to new tech book releases</li>
            <li>Author Q&A sessions with tech thought leaders</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between  md:items-center mt-32 relative">
    
        <div className=" ">
          <h2 className="text-[3rem] font-bold   heading ">Not your average <br/> book <span className="circle relative inline-block">club</span></h2>
          <p className="mt-8 text-xl md:max-w-[480px]">Connect with a community that speaks your language - from <span className="font-bold">Python</span> to <span className="font-bold">TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
      
        </div>
            <picture >
          <source
            srcset="assets/images/image-not-average-desktop.webp"
            aria-hidden="true"
            alt=""
            media="(min-width:800px)"
          />
          <source
            srcset="assets/images/image-not-average-tablet.webp"
            aria-hidden="true"
            alt=""
            media="(min-width:750px)"
          />

          <img
            src="assets/images/image-not-average-mobile.webp"
            aria-hidden="true"
            className="md:h-[560px] rounded-3xl"
          />
        </picture>
        <img src="assets/images/logos-tech.svg"  className="hidden md:block  absolute bottom-0 left-[40%]"/>
      </div>
    </section>
  );
};

export default Features;
