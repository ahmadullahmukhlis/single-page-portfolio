export default function BlogPage() {
  return (
    <>
      <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
        <div className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
          <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
              <i className="fal fa-blog text-theme"></i>
              BLOG
            </div>
            <div className="mt-5 mb-8 md:my-10 section-title">
              <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                Latest{" "}
                <span className="font-semibold text-theme">Insights</span>
              </h2>
              <p className="max-w-xl mt-4 md:mt-6 subtitle">
                I design products that are more than pretty. I make them
                shippable and usable, tempor non mollit dolor et do aute
              </p>
            </div>

            <div className="blog-list grid grid-cols-1 md:grid-cols-2 gap-7.5 *:overflow-hidden *:bg-flashWhite dark:*:bg-metalBlack *:items-center *:rounded-2xl">
              <div className="article group">
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href="article-details.html"
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src="assets/img/blog/article1.png"
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>

                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        UI Design
                      </a>
                      ,<span className="post_date">03 May 2023</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href="article-details.html"
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      Elevate your mornings with perfectly brewed coffee
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href="article-details.html"
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="article group">
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href="article-details.html"
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src="assets/img/blog/article2.png"
                      className="object-cover object-center w-full h-full min-h-[288px] transition-all duration-300 ease-in-out max-h-60 md:min-h-60 group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>
                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        UI Design
                      </a>
                      ,<span className="post_date">03 May 2023</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href="article-details.html"
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      Mastering the clock: A guide to time management
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href="article-details.html"
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="article group">
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href="article-details.html"
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src="assets/img/blog/article3.png"
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>
                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        UI Design
                      </a>
                      ,<span className="post_date">03 May 2023</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href="article-details.html"
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      Homeward bound: Crafting a productive home pffice
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href="article-details.html"
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="article group">
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href="article-details.html"
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src="assets/img/blog/article4.png"
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>
                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        UI Design
                      </a>
                      ,<span className="post_date">03 May 2023</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href="article-details.html"
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      Design Specialization brings a user design-centric.
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href="article-details.html"
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="article group">
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href="article-details.html"
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src="assets/img/blog/article5.png"
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>
                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        UI Design
                      </a>
                      ,<span className="post_date">03 May 2023</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href="article-details.html"
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      Design Specialization brings a user design-centric.
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href="article-details.html"
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="article group">
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href="article-details.html"
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src="assets/img/blog/article6.png"
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>
                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        UI Design
                      </a>
                      ,<span className="post_date">03 May 2023</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href="article-details.html"
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      Design Specialization brings a user design-centric.
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href="article-details.html"
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center md:mt-13 flex items-center justify-center flex-wrap">
              <div className="pagination flex-center gap-4 *:w-10 *:h-10 *:inline-flex *:items-center *:justify-center *:border *:border-platinum *:dark:border-greyBlack *:rounded-full *:transition-all ">
                <a
                  href="#"
                  className="prev hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                >
                  <svg
                    className="w-4"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5738 7.75879L0.761719 7.75879M0.761719 7.75879L7.3501 1.17041M0.761719 7.75879L7.3501 14.3472"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="active hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                >
                  2
                </a>
                <a
                  href="#"
                  className="hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                >
                  <i className="fal fa-ellipsis-h"></i>
                </a>
                <a
                  href="#"
                  className="hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                >
                  8
                </a>
                <a
                  href="#"
                  className="next hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                >
                  <svg
                    className="w-4"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.19961 7.75879L21.0117 7.75879M21.0117 7.75879L14.4233 1.17041M21.0117 7.75879L14.4233 14.3472"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
