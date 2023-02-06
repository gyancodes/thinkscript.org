import React from 'react'

const Gallery = () => {
  return (
    <>
          <div>
            <h1
              className="text-4xl mt-24  sm:text-center sm:text-6xl font-medium text-transparent
          bg-clip-text  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
           from-blue-600 via-sky-700 to-violet-400 tracking-normal "
            >
              Event Gallery
            </h1>
          </div>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />
          
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 height mb-10 mt-24 px-4">
            <div className="flex flex-col sm:flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg "
                className="rectangle h-auto w-100 max-w-full "
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 height mb-10 mt-24 px-4">
            <div className="flex flex-col sm:flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg "
                className="rectangle h-auto w-100 max-w-full "
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 height mb-10 mt-24 px-4">
            <div className="flex flex-col sm:flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg "
                className="rectangle h-auto w-100 max-w-full "
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/gallery/pic1.jpg"
                className="rectangle h-auto w-100 max-w-full"
              />
            </div>
          </div>
    </>
  )
}

export default Gallery
