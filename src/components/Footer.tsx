import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4  bg-white container mx-auto items-center flex justify-center flex-col rounded-lg shadow md:px-6 md:pt-8 dark:bg-gray-900 ">
      <div className=" mx-auto w-full px-6 flex justify-between items-center  sm:items-center sm:justify-around">
        <a
          href="https://GAMI.com/"
          className="flex items-center  w-1/3 mb-4 pl-4 sm:mb-0"
        >
          <svg
            width="36"
            height="46"
            viewBox="0 0 36 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9046 24.2877V28.5234C23.9046 28.9568 23.555 29.3074 23.1228 29.3074H12.8755C12.4432 29.3074 12.0936 28.9568 12.0936 28.5234V24.2877C12.0936 23.8543 11.7439 23.5037 11.3117 23.5037H7.08711C6.65485 23.5037 6.30521 23.1531 6.30521 22.7197V6.58574C6.30521 6.15234 6.65485 5.80177 7.08711 5.80177H11.3117C11.7439 5.80177 12.0936 5.4512 12.0936 5.0178V0.783971C12.0936 0.350572 12.4432 0 12.8755 0H23.1228C23.555 0 23.9046 0.350572 23.9046 0.783971V5.37222C23.9046 5.80562 23.555 6.15619 23.1228 6.15619H13.1675C12.7352 6.15619 12.3856 6.50676 12.3856 6.94016V22.3692C12.3856 22.8026 12.7352 23.1531 13.1675 23.1531H22.8288C23.2611 23.1531 23.6107 22.8026 23.6107 22.3692V18.484C23.6107 18.0506 23.2611 17.7 22.8288 17.7H18.6043C18.172 17.7 17.8224 17.3494 17.8224 16.916V12.3856C17.8224 11.9522 18.172 11.6016 18.6043 11.6016H28.9092C29.3414 11.6016 29.6911 11.9522 29.6911 12.3856V22.7178C29.6911 23.1512 29.3414 23.5018 28.9092 23.5018H24.6846C24.2524 23.5018 23.9027 23.8524 23.9027 24.2858L23.9046 24.2877Z"
              fill="#1C325B"
            />
            <path
              d="M1.8462 39.2602V44.1354H6.70857V42.8449H4.84892V40.9803H8.57975V44.2298C8.57975 45.2103 7.78056 45.9981 6.80463 45.9981H1.76359C0.785741 45.9981 0 45.2103 0 44.2298V39.1639C0 38.1834 0.785741 37.3956 1.76359 37.3956H6.80463C7.78248 37.3956 8.57975 38.2797 8.57975 39.2602H1.8462Z"
              fill="#1C325B"
            />
            <path
              d="M17.7916 37.3975C18.7695 37.3975 19.5667 38.1853 19.5667 39.1658V46H17.6955V43.2282H12.8332V46H10.987V39.1658C10.987 38.1853 11.7727 37.3975 12.7506 37.3975H17.7916ZM17.6955 41.3636V39.2602H12.8332V41.3636H17.6955Z"
              fill="#1C325B"
            />
            <path
              d="M29.7084 37.3975H31.6276V46H29.768V40.2291C28.8036 41.3771 27.7662 42.6426 26.8133 43.7656L23.8451 40.2406V46H21.9989V37.3975H23.9066L26.8152 40.8743L29.7103 37.3975H29.7084Z"
              fill="#1C325B"
            />
            <path
              d="M34.1404 37.3975H36.0001V46H34.1404V37.3975Z"
              fill="#1C325B"
            />
          </svg>
        </a>
        <ul className="xl:flex flex-wrap md:hidden hidden  w-1/2 items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              What We Do
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              GAMI Statistics
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex mb-4 w-1/3 space-x-6 sm:justify-end sm:mt-0 lg:mr-8 mr-16">
          <a
            href="#"
            className="text-gray-500 bg-[#1D335A] p-2 rounded-full  hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
                fill="#fff"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 bg-[#1D335A] p-2 rounded-full  dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
                fill="#fff"
              />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 bg-[#1D335A] p-2 rounded-full hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                fill="#fff"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 bg-[#1D335A] p-2 rounded-full  hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
                fill="#fff"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ?? {new Date().getFullYear()}{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          GAMI
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer