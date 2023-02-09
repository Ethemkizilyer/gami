

const Section = () => {
  return (
    <div className="w-full mb-20 z-50 sticky mx-auto rounded-3xl px-6 container">
      <div className="w-full lg:w-1/2 flex flex-col mx-auto items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-4xl lg:text-[600] font-bold tracking-wider text-[#1D335A]">
          Lorem Ipsum Dolor Sit Amete
        </p>
        <p className="text-x tracking-wider text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          cum ullam. Est eius adipisci sed impedit eveniet. Quas, nihil nobis
          asperiores reiciendis ut quam, repudiandae deserunt aliquid ab odio
          nisii!
        </p>
      </div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-evenly w-full  lg:flex-row">
          <img alt="logo" width={522} height={280} src="./PHOTO_1.png" />
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl text-center mb-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray sm:text-4xl sm:leading-none max-w-lg mb-6">
                Lorem Ipsum Is Cool.
              </h2>
              <p className="text-gray text-base md:text-lg">
                {" "}
                Lorem Ipsum is so cool and awesome to act and so cool to think.
                And very awesome to eat and talk.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-evenly w-full lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <img
              className="sm:block block lg:hidden"
              alt="logo"
              width={522}
              height={280}
              src="./PHOTO_2.png"
            />
            <div className="max-w-xl text-center mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-gray sm:text-4xl sm:leading-none max-w-lg mb-6">
                Awesome Is Lorem Ipsum
              </h2>
              <p className="text-gray text-base md:text-lg">
                Lorem Ipsum is so cool and awesome to act and so cool to think.
                And very awesome to eat and talk.
              </p>
            </div>
          </div>
          <img
            className="sm:hidden hidden lg:block"
            alt="logo"
            width={522}
            height={280}
            src="./PHOTO_2.png"
          />
        </div>
      </div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-evenly w-full  lg:flex-row">
          <img alt="logo" width={522} height={280} src="./PHOTO_3.png" />
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl text-center mb-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray sm:text-4xl sm:leading-none max-w-lg mb-6">
                Cool and awesome is lorem ipsum
              </h2>
              <p className="text-gray text-base md:text-lg">
                Lorem Ipsum is so cool and awesome to act and so cool to think.
                And very awesome to eat and talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
