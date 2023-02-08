

const Contact = () => {
  return (
    <div className="relative flex items-top justify-center bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg  ">
              <iframe
                src="https://maps.google.com/maps?q=ankara&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[455px] w-[535px] rounded-lg"
                frameBorder={0}
                allowFullScreen
              />
            </div>
            <form className="p-6  flex flex-col justify-center">
              <h3 className="text-[24px] font-[600]">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-[#94A3B8] text-[20px] font-[400]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                voluptatibus consequatur inventore minus?
              </p>
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="" className="font-[500] leading-8">
                  Tell usmore about your project*
                </label>
                <textarea
                  className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows={3}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="md:w-44 bg-[#1E293B] hover:bg-blue-dark mx-auto text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
