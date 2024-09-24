import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title title1={`contact`} title2={`us`} />
      </div>
      <div className="my10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Image" />
        <div className='flex flex-col justify-center items-start gap-6'>  
          <p className='font-bold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Stations <br/> Suite 350, Washigton, USA</p>
          <p className='text-gray-500 '>Tel: (415) 555-0123 <br/> Email: example@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Career at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>

    </div>
  )
}

export default Contact
