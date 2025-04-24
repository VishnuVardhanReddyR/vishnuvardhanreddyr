import React from 'react';
import useInView from "react-cool-inview";
import IntroPage from "../subComponents/LandingPageComponents/IntroPage";
import ParticlesAnime from "../subComponents/ReusableComponents/Particles";
import { urlFor } from '../../sanity';

function LandingPage({intro}) {
  
  const { observe, inView} = useInView({
    threshold: 0.25,
    onChange: ({ observe }) => {
      observe(); 
    },
    onLeave: ({ unobserve }) => {
      unobserve();
    },
  });

  return (
    <section ref={observe} className="bg-fixed bg-no-repeat bg-cover bg-macblack-m lg:bg-macblack">
      <div className="relative items-center justify-center w-full h-screen">
        <ParticlesAnime />
        <IntroPage title={intro[0].title} image={urlFor(intro[0].image).url()} typings={intro[0].typingTitle} />
      </div>
    </section>
  )
}

export default LandingPage;
