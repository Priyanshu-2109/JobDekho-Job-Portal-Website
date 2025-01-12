import React from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { useRef } from 'react'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext);

    const titleRef = useRef(null);

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-blue-600 to-blue-950 text-white p-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 '>Over 10,000+ jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore The Best Job Opportunities And Take The First Step Towards Your Future!</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto '>
            <div className='flex items-center '>
                <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
                <input type="text" placeholder='Search for jobs' className='max-sm text-xs p-2 rounded outline-none w-full' />
            </div>
            <div className='flex items-center '>
                <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                <input type="text" placeholder='Location' className='max-sm text-xs p-2 rounded outline-none w-full' />
            </div>
            <button className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
            <p className='font-medium'>Trusted by</p>
            <img className='h-6 ' src={assets.microsoft_logo} alt="" />
            <img className='h-6 ' src={assets.walmart_logo} alt="" />
            <img className='h-6 ' src={assets.accenture_logo} alt="" />
            <img className='h-6 ' src={assets.samsung_logo} alt="" />
            <img className='h-6 ' src={assets.amazon_logo} alt="" />
            <img className='h-6 ' src={assets.adobe_logo} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Hero