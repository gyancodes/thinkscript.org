import React from "react";

const Team = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 mt-4 pb-10">
        <div className="flex justify-center flex-col items-center w-full h-full text-center ">
          <div>
            <h1
              className="text-4xl mt-24  sm:text-center sm:text-6xl font-medium text-transparent
          bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal "
            >
              Core Team Members
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 height mt-24 px-4 font-mono">
            <div className="flex flex-col sm:flex-col justify-center items-center gap-3">
              <img
                src="./images/image.jpg"
                className="rounded-full h-auto w-40 max-w-full "
                alt=""
              />
              <span className="font-extrabold font-serif text-lg   text-black">
                Founder
              </span>
              <span className="font-bold text-blue-700">
                Gyan Prakash Tiwari
              </span>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/cofounder.jpg"
                className="rounded-full h-auto w-40 max-w-full"
                alt=""
              />
              <span className="font-extrabold font-serif text-lg text-black">
                Co-Founder
              </span>
              <span className="font-bold text-blue-700">Animesh Singh</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/director.jpg"
                className="rounded-full h-auto w-40 max-w-full"
                alt=""
              />
              <span className="font-extrabold font-serif text-lg   text-black">
                Director/Mentor
              </span>
              <span className="font-bold text-blue-700">Saneev Kumar Das</span>
            </div>

           
          </div>
        </div>
        <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />

      </div>
    </>
  );
};

export default Team;
