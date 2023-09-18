"use client";

// next js imports
import Image from 'next/image';
import { Outfit, Space_Grotesk,  } from "next/font/google"
import localFont from 'next/font/local'

// icons imports
import ArrowLight from "../public/assets/icons/c1.png"
import ArrowDark from "../public/assets/icons/b1.png"
import ToggleLight from "../public/assets/icons/c2.png"
import ToggleDark from "../public/assets/icons/b2.png"
import StarLight from "../public/assets/icons/c3.png"
import StarDark from "../public/assets/icons/b3.png"

// react imports
import { useState } from 'react';
import Work from '@components/Work';

// fonts imports
const outfit = Outfit({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const lincoln = localFont({ src: './Lincoln.otf' })

// home page declaration
export default function Home() {

  // display dark theme when its past 18:00, and light when between 6:00 and 18:00
  const userTime = new Date();
  const currentHour = userTime.getHours();
  const isDaytime = currentHour >= 6 && currentHour < 18;

  // declare initial state for dark theme based on time of day
  const [isDarkTheme, setIsDarkTheme] = useState(!isDaytime)
  const [isWorkOpen, setIsWorkOpen] = useState(false)

  // create a variable for dark theme classNames, so it is cleaner
  const themeVarClass = isDarkTheme ? "dark" : "light";

  // function for handling toggle dark theme
  const handleThemeSwitch = () => {
    setIsDarkTheme(prev => !prev)
  }

  const handleWorkSwitch = () => {
    setIsWorkOpen(prev => !prev)
  }

  return (
    <>
      <header className={`${themeVarClass} ${themeVarClass}-bg`}> 
        <Image
          src={isDarkTheme ? StarDark : StarLight} // Replace with the actual image path
          alt="star icon"
          className='star-icon'
          width={60} // Set the desired width
          height={60} // Set the desired height
        />
        <h1 className={`${spaceGrotesk.className} header-h1`}>sonce&nbsp;&nbsp;<span className='dwg'>.dwg</span></h1>
        <a href='#main-section'><Image
          src={isDarkTheme ? ArrowDark : ArrowLight} // Replace with the actual image path
          alt="arrow icon"
          className='arrow-icon'
          width={100} // Set the desired width
          height={100} // Set the desired height
        /></a>
        <Image
          src={isDarkTheme ? ToggleDark : ToggleLight} // Replace with the actual image path
          alt="toggle icon"
          className='toggle-icon'
          width={150} // Set the desired width
          height={150} // Set the desired height
          onClick={handleThemeSwitch}
        />
      </header>
      <main id="main-section" className={`flex ${themeVarClass}`}>
        <Image
          src={isDarkTheme ? StarDark : StarLight} // Replace with the actual image path
          alt="star icon"
          className='star-icon-bottom'
          width={50} // Set the desired width
          height={50} // Set the desired height
        />
        <div className="box flex team">
          <h1 className={lincoln.className}>SONCE. DWG, CROSS-CREATIVE STUDIO WITH A MISSION</h1>
          <p className={outfit.className}>
            Nasa domena zajema vse, od oblikovanja identitete vase znamke, oblikovanja spletnih strani, izdelkov, produktne fotografije, prilagojenih graficnih resitev in arhitekturniega oblikovanja prostorov interierja. Trdno verjamemo, da si vsaka ideja zasluzi podobo, ki izraza njeno avtenticnost.
          </p>
          <div><button onClick={handleWorkSwitch} className={`${themeVarClass}-button ${spaceGrotesk.className}`}>our work</button></div>
        </div>
        <div className="box flex pricing">
          <h1 className={lincoln.className}>DOWN TO EARTH, PA CEPRAV S SONCA</h1>
          <p className={outfit.className}>Nasa uspesnost se rodi iz treh kljucnih nacel: Inovativnost - srce vsakega projekta, Ucinkovitost - vec kot le lepota, gre za funkcionalnost, Jasnost - s svojim delom prikazemo bistvo, ki ga kot znamka zeli komunicirati.</p>
          <div><button className={`${themeVarClass}-button ${spaceGrotesk.className}`}>pricing</button></div>
        </div>
        <div className="box flex other">
          <h1 className={lincoln.className}>SOLAR TEAM</h1>
          <p className={outfit.className}>
            Kreativna skupina oblikovalcev, arhitektov in programerjev. Povezujemo oblikovanje in tehnicno strokovnost, potrebno za ustvarjanje jasne in komunikativne podobe vase znamke.
          </p>
        </div>
        <div className='solo-section'><a href="mailto:info@sonce-dwg.io"><button className={`${themeVarClass}-button ${spaceGrotesk.className}`}>ustvarjajte z nami</button></a></div>
        <h1 className={`${lincoln.className} footer-h1`}>info@sonce.dwg.io</h1>
        <h1 className={`${lincoln.className} footer-h1`}>NIC STIRI NIC DVA ENA STIRI DVA ENA ENA</h1>
      </main>
      {isWorkOpen ? <Work handle={handleWorkSwitch} /> : ""}
    </>
  )
}
