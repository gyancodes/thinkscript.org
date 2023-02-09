import React from "react";
import Header from "../../Header/Header";

const Home = () => {
  return (
    <>
      <Header />   

    <div className="border rounded p-10 my-4 w-70% ml-60 mr-60 mt-10 bg-blue-50 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
                   from-blue-800 via-sky-700 to-violet-500 tracking-normal ">
      <p className="text-black mb-6 text-lg font-bold md:text-2xl">
         Want to keep your brain engaged with open source projects ?
      </p>
      <p className="text-gray-800 dark:text-gray-400 mb-10 text-base">
        Enter your email address and you'll be be added to our email newsletter, of which you can opt out any time.
      </p>
      <form className="relative my-4">
        <input
          aria-label="Email for newsletter"
          placeholder="thinkscriptorg@email.com"
          type="email"
          autoComplete="email"
          required
          className="py-4 px-0 text-md bg-transparent w-9/12 text-gray-900 border-b-2 border-gray-600 dark:border-gray-400
           dark:text-white focus:border-brand focus-visible:outline-none"
        />
        <button
          className=" items-center ml-10 px-4 py-4 mt-4 bg-blue-900  text-white transform 
          transition duration-1000 hover:scale-75 font-bold text-lg"
          type="submit">
          Join Now
        </button>
      </form>
      <p className="text-xl text-violet-300 dark:text-blue-200">
        538 Members 
      </p>
    </div>

    </>
  );
};

export default Home;
