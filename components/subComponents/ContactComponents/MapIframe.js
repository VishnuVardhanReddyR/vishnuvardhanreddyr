import React from 'react';

const MapIframe = ({mapsrc, inView}) => {
  return (
    <iframe 
        width="100%" 
        height="100%" 
        title="map" 
        className={`${inView? `animate-fade-in-right`: ``} absolute inset-0 filter grayscale-[1] contrast-[1.2] opacity-[0.16]`} 
        frameborder="0" 
        marginHeight="0" 
        marginWidth="0" 
        scrolling="no" 
        src={mapsrc}>
    </iframe>
  )
}

export default MapIframe;