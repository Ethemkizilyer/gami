import { useState } from "react";

const testimonials = [1, 2, 3, 4, 5, 6];

const Testimonial: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : testimonials.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      prevPage < testimonials.length - 1 ? prevPage + 1 : 0
    );
  };

  const currentTestimonials = testimonials.slice(currentPage, currentPage + 2);

  return (
    <>
      <div className="w-full lg:w-1/2 flex flex-col mx-auto items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text md:text-6xl lg:text-[600] font-bold tracking-wider text-gray-900 mb-8">
          Lorem Ipsum Dolor
        </p>
        <p className="text-x tracking-wider text-[#94A3B8] mt-2 text-[20px] font-[400]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          cum ullam. Est eius adipisci sed impedit eveniet. Quas, nihil nobis.
        </p>
      </div>

      <div className="lg:w-[910px] w-[60%] mx-auto h-[370px] mt-36 lg:mt-0 flex items-center justify-center transition duration-1000">
        <button
          onClick={handlePrevClick}
          className="bg-slate-100 rounded-full p-2 prev-btn hover:bg-[#1D335A] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex lg:flex-row  flex-col justify-between items-center lg:w-[860px]  transition duration-1000">
          {currentTestimonials.map((testimonial) => (
            <div className="w-[413px] flex items-center justify-center  transition duration-1000 carousel">
              <blockquote className=" flex  flex-col justify-center items-center  p-2">
                <div className="flex  bg-slate-300 h-[300px] p-6 flex-col items-center">
                  <div className="flex gap-0.5 text-white items-center justify-center">
                    <span className=" p-0.5 text-[#1E293B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className=" p-0.5 text-[#1E293B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className=" p-0.5 text-[#1E293B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className=" p-0.5 text-[#1E293B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className=" p-0.5 text-[#1E293B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </div>
                  <div className="my-4 ">
                    <p className="mt-4  text-gray-600 text-center">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam cumque recusandae dolorum porro, quasi sunt
                      necessitatibus dolorem ab laudantium vel."
                    </p>
                  </div>
                  <div>
                    <img className="w-12 h-12 " src="./small.png" alt="alt" />
                  </div>
                  <footer className="mt-4 text-[#1E293B]">Eddie Murphy</footer>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="bg-slate-100 rounded-full p-2 next-btn hover:bg-[#1D335A] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Testimonial;
