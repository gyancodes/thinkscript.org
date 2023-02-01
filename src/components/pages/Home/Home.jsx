import React from "react";
import Header from "../../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="">
        <h1 className="text-4xl  sm:text-center sm:text-8xl font-extrabold text-transparent  bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal ">
          Our Vision
        </h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />
        <div className="flex justify-center">
        <ul className="flex">
          <li className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"

            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span>We will make individual aware of new technologies and keys that we can use to develop product</span>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
