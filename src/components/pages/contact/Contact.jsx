import React from 'react'

const Contact = () => {
  return (
  <>
             <div>
                  <h1 className="text-4xl mt-24 mb- 10 sm:text-center sm:text-8xl font-medium text-transparent 
                   bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-sky-700 to-violet-400 tracking-normal ">
                    Contact us at ...
                  </h1>
                  <p className="mt-6 mb-10 text-lg leading-8 text-gray-600 sm:text-center">
                    You can contact with us if you want to join us and host hackathons,talks and events.
                    Let's grow together!
                  </p>
             </div>

        

        <div className="flex-col flex gap-14 md:flex-row md:flex sm:flex sm:flex-col justify-center items-center mt-24 mb-24 ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <img
              src="./images/director.jpg"
              className="rounded-full h-24 "
            />
            <span className="font-extrabold text-2xl text-blue-700">Saneev Kumar Das
            </span>
            <span className="font-bold font-serif text-lg  text-black">
              Director of Thinkscript.Org
              <h1>https://www.linkdin.com/in/gyancodes</h1>
              <h1>saneevdas.061995@gmail.com</h1>
              <h1>+91 7978029866</h1>
            </span>
            <span className="font-bold font-serif text-lg   text-black">  
            </span>
          </div>
        </div>

      <div className="flex-col flex gap-14 md:flex-row md:flex sm:flex sm:flex-col justify-center items-center mt-24 mb-24 ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <img
              src="./images/image.jpg"
              className="rounded-full h-24 "
            />
            <span className="font-extrabold text-2xl text-blue-700">Gyan Prakash Tiwari
            </span>
            <span className="font-bold font-serif text-lg  text-black">
              Founder of Thinkscript.Org
              <h1>https://www.linkdin.com/in/gyancodes</h1>
              <h1>gyanprakasheng@gmail.com</h1>
              <h1>+91 9199071896</h1>
            </span>
            <span className="font-bold font-serif text-lg   text-black">  
            </span>
          </div>
        </div>

        <div className="flex-col flex gap-14 md:flex-row md:flex sm:flex sm:flex-col justify-center items-center mt-24 mb-24 ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <img
              src="./images/cofounder.jpg"
              className="rounded-full h-24 "
            />
            <span className="font-extrabold text-2xl text-blue-700">Animesh Singh
            </span>
            <span className="font-bold font-serif text-lg  text-black">
              Co-Founder of Thinkscript.Org
              <h1>https://www.linkdin.com/in/animesh-singh-2635991b</h1>
              <h1>csanimeshsingh747@gmail.com</h1>
              <h1>+91 9661339393</h1>
            </span>
            <span className="font-bold font-serif text-lg   text-black">  
            </span>
          </div>
        </div>

        <div className="flex-col flex gap-14 md:flex-row md:flex sm:flex sm:flex-col justify-center items-center mt-24 mb-24 ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <img
              src="./images/logonew.png"
              className="rounded-full h-24 "
            />
            <span className="font-extrabold text-2xl text-blue-700">Thinkscript Organization
            </span>
            <span className="font-bold font-serif text-lg  text-black">
              Thinkscript.Org
              <h1>https://www.linkedin.com/company/thinkscript-orgnization/</h1>
              <h1>thinkscriptorg@gmail.com</h1>
            </span>
            <span className="font-bold font-serif text-lg   text-black">  
            </span>
          </div>
        </div>
         
  </>
  )
}
export default Contact;