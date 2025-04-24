import React, { useEffect } from 'react';
import { overview } from "../../../lib/Data";
import { motion } from 'framer-motion';
import Image from 'next/image';

function MyOverview({ image, title, description, name, email, address, nameLabel, emailLabel, addressLabel }) {

  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="flex flex-col items-center justify-center py-24 mx-auto border-red-500 lg:px-72 lg:flex-row">
      <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="relative contrast-200 grayscale w-48 h-48 mr-8 rounded-full">
          <Image src={image} alt="Picture of the author" layout="fill" className="rounded-full" />
          {/* <h1 className='text-3xl pr-8'>Vishnu Vardhan Reddy Rapuru</h1> */}
        </motion.div>
        <div className='flex flex-col hidden md:block'>
          <div className='w-[0.1px] h-8 border-r-2 border-gray-500'></div>
          <div className='w-[0.1px] h-2 mt-2 border-r-2 border-gray-500'></div>
          <div className='w-[0.1px] h-32 mt-2 border-r-2 border-gray-500'></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 ml-8 md:w-3/5 md:pl-6">
          <h1 className="mb-4 text-lg tracking-[2px] font-medium text-center text-gray-200 md:text-xl title-font sm:text-4xl lg:text-start">{title}</h1>
          <p className="text-xs text-center lg:text-start">
            {description}
          </p>
          <div className="text-xs relative flex flex-col py-6 bg-black rounded shadow-md md:flex-row md:space-x-6">
            <div className="space-y-4 lg:w-1/2 lg:mt-0">
              <h2 className="tracking-widest text-white text-gray-200 title-font">{nameLabel}</h2>
              <p className="">{name}</p>
              <h2 className="tracking-widest text-white text-gray-200 title-font lg:mt-2">{emailLabel}</h2>
              <a href={`mailto:${email}`} className="leading-relaxed text-Primary">{email}</a>
            </div>
            <div className="mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="font-semibold tracking-widest text-gray-200 title-font">{addressLabel}</h2>
              <p className="leading-relaxed">{address}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MyOverview;
