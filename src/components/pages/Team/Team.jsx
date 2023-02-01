import React from "react";

const Team = () => {
  return (
    <>
    <div>
        <h1 className="text-4xl mt-24  sm:text-center sm:text-8xl font-extrabold text-transparent  bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal ">
          Core Team Members
        </h1>
    </div>

    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex gap-14 items-center mt-24 mb-24 ">

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/image.jpg" className="rounded-full h-60" alt="" />
          <h4 className="font-bold">Founder</h4>
          <h1 className="font-bold">Gyan Prakash Tiwari</h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/cofounder.jpg" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Co-Founder</h1>
          <h1 className="font-bold">Animesh Singh</h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/director.jpg" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Director/Mentor</h1>
          <h1 className="font-bold">Saneev Kumar Das</h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/seniorinstructor.jpg" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Senior Instructor</h1>
          <h1 className="font-bold">Rakesh Kumar Ray</h1>
          
        </div>
      </div>
    </div>
    <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />




    <div>
        <h1 className="text-4xl mt-20  sm:text-center sm:text-8xl font-extrabold text-transparent  bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal ">
          Our Instructors
        </h1>
    </div>

    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex gap-14 items-center mt-24 mb-24 ">

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

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/user.png" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Instructor</h1>
          <h1 className="font-bold">--</h1>
          
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex gap-14 items-center mt-24 mb-24 ">

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/user.png" className="rounded-full h-60" alt="" />
          <h4 className="font-bold">Instructor</h4>
          <h1 className="font-bold">--</h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/user.png" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Instructor</h1>
          <h1 className="font-bold">--</h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/user.png" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Instructor</h1>
          <h1 className="font-bold">--</h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <img src="./images/user.png" className="rounded-full h-60" alt="" />
          <h1 className="font-bold">Instructor</h1>
          <h1 className="font-bold">--</h1>
          
        </div>
      </div>
    </div>
    <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />

    </>
  );
};

export default Team;