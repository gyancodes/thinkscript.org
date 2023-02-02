import React from "react";

const Team = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center w-full h-full text-center ">
        <div>
          <h1 className="text-4xl mt-24  sm:text-center sm:text-8xl font-extrabold text-transparent  bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal ">
            Core Team Members
          </h1>
        </div>
        <div className="flex-col flex gap-14 sm:flex sm:flex-col md:flex md:flex-row flex-shrink-0 justify-center items-center mt-24 mb-24 ">
          <div className="flex flex-col sm:flex-col justify-center items-center gap-3">
            <img
              src="./images/image.jpg"
              className="rounded-full h-60 "
              alt=""
            />
            <span className="font-extrabold font-serif text-lg   text-black">
              Founder
            </span>
            <span className="font-bold text-blue-700">Gyan Prakash Tiwari</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="./images/cofounder.jpg"
              className="rounded-full h-60"
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
              className="rounded-full h-60"
              alt=""
            />
            <span className="font-extrabold font-serif text-lg   text-black">
              Director/Mentor
            </span>
            <span className="font-bold text-blue-700">Saneev Kumar Das</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="./images/seniorinstructor.jpg"
              className="rounded-full h-60"
              alt=""
            />
            <span className="font-extrabold font-serif text-lg   text-black">
              Senior Instructor
            </span>
            <span className="font-bold text-blue-700">Rakesh Kumar Ray</span>
          </div>
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />

      <div className="text-center">
        <h1 className="text-4xl mt-20  sm:text-center sm:text-8xl font-extrabold text-transparent  bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal ">
          Our Instructors
        </h1>
      </div>

      <div className="flex justify-center items-center w-full h-full ">
        <div className="flex-col flex gap-14 md:flex-row md:flex sm:flex sm:flex-row justify-center items-center mt-24 mb-24 ">
          <div className="flex flex-col justify-center items-center ">
            <img src="./images/user.png" className="rounded-full h-60" alt="" />
            <h4 className="font-bold">Core Mentor/Instructor</h4>
            <h1 className="font-bold">Ms Sujata Chakraborty</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <img src="./images/user.png" className="rounded-full h-60" alt="" />
            <h1 className="font-bold">Instructor</h1>
            <h1 className="font-bold">Bubun Kumar Mohanta</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <img src="./images/user.png" className="rounded-full h-60" alt="" />
            <h1 className="font-bold">Instructor</h1>
            <h1 className="font-bold">Rashmi Prakash Swain</h1>
          </div>
        </div>
      </div>

      <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />
    </>
  );
};

export default Team;
