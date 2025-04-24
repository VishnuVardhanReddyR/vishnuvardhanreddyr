import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import useInView from "react-cool-inview";
import { Typewriter } from "react-simple-typewriter";
import { homeState } from "../../../Atoms/homeAtom";
import { motion } from 'framer-motion';
import Image from 'next/image';

function IntroPage({ title, typings, image}) {
  var titles = typings.map((typing) => typing.title);
  
  const[ homeOpen, setHomeOpen ] = useRecoilState(homeState);
  const { observe, inView} = useInView({
    threshold: 0.25,
    onChange: ({ observe }) => {
      observe(); 
    },
    onLeave: ({ unobserve }) => {
      unobserve();
    },
  });

  useEffect(() => {
    setHomeOpen(inView);
  },[inView]);

  return (
    <div id="LandingPage" ref={observe}>
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }} 
              className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
                <div className='relative w-48 h-48 overflow-hidden rounded-full contrast-200 grayscale'>
                  <Image width={600} height={600} alt="author image" src={image} />
                </div>
                <h1 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]">{title}</h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-2xl lg:text-4xl 2xl:text-5xl">
                  {'<  '}
                  <span className="">
                    <Typewriter
                      words={titles}
                      loop={1000}
                      cursor
                      cursorStyle='/>'
                      typeSpeed={100}
                      deleteSpeed={100}
                      delaySpeed={2000}
                    />
                  </span>
                </p>
              </motion.div>
      </div>
  );
}

export default IntroPage;