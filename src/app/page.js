import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Main Content Start */}
      <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem py-5 xl:py-3.5 max-w-content max-xl:mx-auto xl:ml-auto xl:max-2xl:max-w-50rem">
        {/* Hero/Introduction Section Start */}
        <div data-scroll-index="0" id="home">
          <div className="hero-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
              <i className="fal fa-home text-theme"></i>
              INTRODUCE
            </div>
            <div className="items-center gap-6 hero-content md:flex xl:gap-10">
              <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
                <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
                  I Craft The <br />
                  <span className="text-theme">Digital Landscape</span>
                </h1>
                <p>
                  I am a{" "}
                  <span className="font-medium text-black dark:text-white/90">
                    Frontend Developer
                  </span>{" "}
                  at heart, and I create features that are best suited for the
                  job at hand.
                </p>
                <ul className="flex items-center mt-4 -mx-3 lg:mt-5 flex items-center mx-3 text-regular">
                  <li>
                    <i className="mr-2 fal fa-check-double text-theme"></i>
                    Available for work
                  </li>
                  <li>
                    <i className="mr-2 fal fa-check-double text-theme"></i>
                    Full Time Job
                  </li>
                </ul>
                <ul className="mt-7 buttons">
                  <li data-scroll-nav="8">
                    <a
                      href="#contact"
                      className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
                    >
                      <i className="fal fa-paper-plane"></i>
                      HIRE ME
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
                <img
                  src="assets/img/hero-img-1.png"
                  className="dark:hidden"
                  alt="Hero Image - Light Mode"
                />
                <img
                  src="assets/img/hero-img-2.png"
                  className="hidden dark:block"
                  alt="Hero Image - Dark Mode"
                />
              </div>
            </div>
            <div className="mb-2 mt-14 xl:mb-0 xl:mt-20">
              <div className="items-center grid-cols-12 overflow-hidden md:grid">
                <div className="hidden col-span-2 md:inline-block">
                  <h6 className="font-medium text-black dark:text-white/80 text-sm md:max-w-[8rem] border-l border-theme pl-4">
                    Trusted companies
                  </h6>
                </div>
                <div className="col-span-10 logo-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo1.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo2.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo3.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo4.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo2.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo4.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo2.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo4.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          href="#"
                          className="transition duration-200 flex-center"
                        >
                          <img
                            src="assets/img/partners/logo2.svg"
                            alt="Partner Name"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero/Introduction Section End */}

        {/* About Me Section Start */}
        <div data-scroll-index="1" id="about">
          <div className="about-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
              <i className="fal fa-user text-theme"></i>
              ABOUT ME
            </div>
            <div className="mt-7 md:mt-10 section-title">
              <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                About <span className="font-semibold text-theme">Me</span>
              </h2>
              <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                Hi, my name is{" "}
                <span className="text-black dark:text-white">
                  Brown Reddick
                </span>{" "}
                and I began using WordPress when I first started. I’ve spent
                most of my waking hours for the last ten years designing,
                programming, and operating{" "}
                <span className="text-black dark:text-white">WordPress</span>{" "}
                sites, going beyond with exclusive design.
              </p>
            </div>
            <div className="mt-6 section-content">
              <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4 inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md:py-2">
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  HTML5 & CSS3 (94%)
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  Bootstrap (98%)
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  TailwindCSS (90%)
                </a>
              </div>

              <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3 flex items-center">
                <li>
                  <span className="flex-[0_0_100px] font-medium text-black dark:text-white">
                    Name
                  </span>
                  <span className="inline-flex flex-wrap gap-2">
                    Brown Reddick
                  </span>
                </li>
                <li>
                  <span className="flex-[0_0_100px] font-medium text-black dark:text-white">
                    Birth Day
                  </span>
                  <span className="inline-flex flex-wrap gap-2">
                    May 30, 1992
                  </span>
                </li>
                <li>
                  <span className="flex-[0_0_100px] font-medium text-black dark:text-white">
                    Address
                  </span>
                  <span className="inline-flex flex-wrap gap-2">
                    New York, USA
                  </span>
                </li>
                <li>
                  <span className="flex-[0_0_100px] font-medium text-black dark:text-white">
                    Phone
                  </span>
                  <span className="inline-flex flex-wrap gap-2">
                    +1234 567 890
                  </span>
                </li>
                <li>
                  <span className="flex-[0_0_100px] font-medium text-black dark:text-white">
                    Email
                  </span>
                  <span className="inline-flex flex-wrap gap-2">
                    email@example.com
                  </span>
                </li>
                <li>
                  <span className="flex-[0_0_100px] font-medium text-black dark:text-white">
                    Nationality
                  </span>
                  <span className="inline-flex flex-wrap gap-2">American</span>
                </li>
              </ul>

              <div className="text-center">
                <a
                  href="#contact"
                  className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
                >
                  <i className="fal fa-paper-plane"></i>
                  CONTACT ME
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About Me Section End */}

        {/* Experience Section Start */}
        <div data-scroll-index="2" id="experience">
          <div className="experience-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
              <i className="fal fa-briefcase text-theme"></i>
              EXPERIENCE
            </div>
            <div className="mt-7 md:mt-10 section-title">
              <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                My <span className="font-semibold text-theme">Experience</span>
              </h2>
              <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                Over the years, I've had the pleasure of working with various
                clients, which led me to gain experience and expertise in
                different fields.
              </p>
            </div>
            <div className="mt-6 section-content">
              <ul className="space-y-5 timeline">
                <li className="relative flex gap-4 timeline-item">
                  <div className="timeline-marker">
                    <span className="absolute block w-8 h-8 bg-white border-4 rounded-full border-platinum dark:bg-greyBlack200 dark:border-greyBlack"></span>
                  </div>
                  <div className="flex-1 overflow-hidden leading-5 text-black dark:text-white timeline-content">
                    <span className="block font-semibold">
                      Frontend Developer at XYZ
                    </span>
                    <span className="block text-sm">
                      Jan 2021 - Present | New York, USA
                    </span>
                    <p className="mt-2">
                      I develop and maintain the front-end functionality of
                      clients' websites, ensuring that the UI/UX is optimal for
                      users.
                    </p>
                  </div>
                </li>
                <li className="relative flex gap-4 timeline-item">
                  <div className="timeline-marker">
                    <span className="absolute block w-8 h-8 bg-white border-4 rounded-full border-platinum dark:bg-greyBlack200 dark:border-greyBlack"></span>
                  </div>
                  <div className="flex-1 overflow-hidden leading-5 text-black dark:text-white timeline-content">
                    <span className="block font-semibold">
                      Frontend Developer at ABC
                    </span>
                    <span className="block text-sm">
                      Jan 2020 - Dec 2020 | Los Angeles, USA
                    </span>
                    <p className="mt-2">
                      I collaborated with the design team to create highly
                      scalable front-end applications.
                    </p>
                  </div>
                </li>
                <li className="relative flex gap-4 timeline-item">
                  <div className="timeline-marker">
                    <span className="absolute block w-8 h-8 bg-white border-4 rounded-full border-platinum dark:bg-greyBlack200 dark:border-greyBlack"></span>
                  </div>
                  <div className="flex-1 overflow-hidden leading-5 text-black dark:text-white timeline-content">
                    <span className="block font-semibold">
                      Junior Developer at LMN
                    </span>
                    <span className="block text-sm">
                      Jan 2018 - Dec 2019 | San Francisco, USA
                    </span>
                    <p className="mt-2">
                      I worked on several small projects, learning the ropes of
                      web development and expanding my skill set.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Experience Section End */}

        {/* Contact Section Start */}
        <div data-scroll-index="3" id="contact">
          <div className="contact-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
              <i className="fal fa-envelope text-theme"></i>
              CONTACT
            </div>
            <div className="mt-7 md:mt-10 section-title">
              <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                Get In <span className="font-semibold text-theme">Touch</span>
              </h2>
              <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                I'm available for freelance work. Connect with me via email:
              </p>
            </div>
            <div className="mt-6 section-content">
              <form>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border rounded-lg dark:bg-nightBlack border-platinum dark:border-greyBlack placeholder-platinum dark:placeholder-greyBlack200 focus:outline-none focus:border-theme"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 border rounded-lg dark:bg-nightBlack border-platinum dark:border-greyBlack placeholder-platinum dark:placeholder-greyBlack200 focus:outline-none focus:border-theme"
                    />
                  </div>
                </div>
                <div className="relative mt-6">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 border rounded-lg dark:bg-nightBlack border-platinum dark:border-greyBlack placeholder-platinum dark:placeholder-greyBlack200 focus:outline-none focus:border-theme"
                  ></textarea>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
                  >
                    <i className="fal fa-paper-plane"></i>
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Contact Section End */}
      </div>
    </main>
  );
}
