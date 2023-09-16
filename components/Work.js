import { useState, useEffect } from 'react';
import work_1 from "../public/assets/imgs/1-14.jpg"
import work_2 from "../public/assets/imgs/2-14.jpg"
import work_3 from "../public/assets/imgs/3-14.jpg"
import work_4 from "../public/assets/imgs/4-14.jpg"
import work_5 from "../public/assets/imgs/5-14.jpg"
import work_6 from "../public/assets/imgs/6-14.jpg"

import ArrowDark from "../public/assets/icons/b1.png"

import Image from 'next/image'

const Work = (props) => {
    const images = [work_1, work_2, work_3, work_4, work_5, work_6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    // Create an interval to switch images every 2 seconds
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
    }, []);

  return (
        
    <div className='work'>
        <Image 
            src={ArrowDark}
            width={100}
            className='arrow-left'
            onClick={props.handle}
        />
        <div className='flexing'>
            <Image src={images[currentIndex]} width={500} />
        </div>
    </div>
  )
}

export default Work