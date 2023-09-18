import { useState, useEffect } from 'react';

import { Space_Grotesk,  } from "next/font/google"

import work_2 from "../public/assets/imgs/2-14.jpg"
import work_3 from "../public/assets/imgs/3-14.jpg"
import work_4 from "../public/assets/imgs/4-14.jpg"
import work_5 from "../public/assets/imgs/5-14.jpg"
import work_6 from "../public/assets/imgs/6-14.jpg"

import brands_2 from "../public/assets/brands/creapro.png"
import brands_3 from "../public/assets/brands/aneki.jpg"
import brands_4 from "../public/assets/brands/dunkin.png"
import brands_5 from "../public/assets/brands/impero.png"
import brands_6 from "../public/assets/brands/amareen.png"

import ArrowDark from "../public/assets/icons/b1.png"
import StarDark from "../public/assets/icons/b3.png"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })


import Image from 'next/image'

const Work = (props) => {
    const images = [work_2, work_3, work_4, work_5, work_6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    // Create an interval to switch images every 2 seconds
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
    }, []);

  return (
        
    <div className='work'>
        <div className="work-upper">
            <Image 
                src={ArrowDark}
                width={50}
                className='arrow-left'
                onClick={props.handle}
            />
            <Image 
                src={StarDark}
                width={50}
                className='arrow-left'
                onClick={props.handle}
            />
            <h1 className={`${spaceGrotesk.className}`}>sonce&nbsp;&nbsp;<span className='dwg'>.work</span></h1>
        </div>
        <div className='flexing'>
            <Image src={images[currentIndex]} width={820} />
        </div>
        <div className="work-lower">
            <Image 
                src={brands_2}
                width={60}
                className='brands-style'
                onClick={props.handle}
            />
            <Image 
                src={brands_3}
                width={60}
                className='brands-style'
                onClick={props.handle}
            />
            <Image 
                src={brands_4}
                width={60}
                className='brands-style'
                onClick={props.handle}
            />
            <Image 
                src={brands_5}
                width={60}
                className='brands-style'
                onClick={props.handle}
            />
            <Image 
                src={brands_6}
                width={60}
                className='brands-style'
                onClick={props.handle}
            />
        </div>
    </div>
  )
}

export default Work