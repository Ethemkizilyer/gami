import React from "react";




const Slider = () => {
  return (
    <>
      <div className="flex flex-wrap md:mt-36 mt-36   -mx-4 lg:mt-6">
        <div className="w-full px-4">
          <div className="text-center mx-auto  max-w-[510px]">
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              What We Offer
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mb-8 px-5 bg-white min-h-[400px]">
        <div className="grid border divide-y divide-neutral-200 bg-slate-200 rounded-lg max-w-[846px] mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className=" pt-4 flex justify-between -translate-y-5  px-2 items-center font-medium cursor-pointer list-none">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 px-2 bg-white leading-7  line group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
                sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between -translate-y-5 px-2 items-center font-medium cursor-pointer list-none">
                <span> How does billing work?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 px-2 bg-white leading-7  line group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
                sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex px-2 -translate-y-5 justify-between items-center font-medium cursor-pointer list-none ">
                <span> Can I get a refund for my subscription?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 px-2 bg-white leading-7  line group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
                sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex px-2 -translate-y-5 justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I cancel my subscription?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 px-2 bg-white leading-7  line group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
                sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
              </p>
            </details>
          </div>
          <div className="pt-5">
            <details className="group">
              <summary className="flex justify-between -translate-y-5 px-2 items-center font-medium cursor-pointer list-none">
                <span> Can I try this platform for free?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 px-2 bg-white leading-7  line group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
                sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};


export default Slider;
