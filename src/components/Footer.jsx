import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 '>
            <div>
                <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore perspiciatis provident ratione sapiente, voluptas vitae laboriosam error assumenda veniam.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 uppercase'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 uppercase'>get in touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-987-45632</li>
                    <li>contact@example.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyrights 2024@ example.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
