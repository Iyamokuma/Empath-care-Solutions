import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const Courses = () => {
  return (
    <>
      <section className='courses bg-[#F3F4F8] py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl font-semibold text-black'>
              Find The Right <br />
              Care for you
            </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {courses.map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                  <div className='categ flex gap-4 absolute top-0 m-3'>
                    <span className='text-[14px] bg-blue-700 p-1 px-3 text-white rounded-[5px] shadow-md'>CARE</span>
                    <span className='text-[14px] bg-black-700 p-1 px-3 text-white rounded-[5px] shadow-md'>SUPPORT</span>
                  </div>
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='bg-indigo-400' /> 
                    </div>
                  </div>
                  <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                 
                </div>
                <div to='/contact' className='flex items-center justify-between border-t border-gray-200 p-3'>
                  <NavLink  to="/contact"className='text-[14px] ml-2 flex items-center'>
                    Send A Request <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
