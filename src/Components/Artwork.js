import React from 'react'
import "./Artwork.css"
import bull_painting from '../img/bullpainting.JPG'
import colorful_sky from '../img/colorful_sky.JPG'
import abstract_painting from '../img/abstractpainting.JPG'
import horse from '../img/horse.JPG'
import sketches from '../img/sketches.JPG'
import lone_woman from '../img/lone_woman.JPG'
import alexander from '../img/alexander.JPG'
import return_home from '../img/return_home.JPG'
import old_city from '../img/old_city.JPG'
import cloudy_sky from '../img/cloudy_sky.JPG'

function Artwork() {
  return (
    <div className='service component__space' id='artworks'>
        <div className='heading'>
            <h1 className='heading sweet'> My Artworks</h1>
            <p className='heading p__color'> These are some of my paintings and skecthes
            that I have done in my free time. I love drawing sketches and doing paintings 
            either it be oil painting or watercolor. 
            </p>
        </div>
        <div className='body__art'>
            <div className='grid-wrap'>
              <ul>
                <li><img src={bull_painting}></img></li>
                <li><img src={colorful_sky}></img></li>
                <li><img src={abstract_painting}></img></li>
                <li><img src={horse}></img></li>
                <li><img src={sketches}></img></li>
                <li><img src={lone_woman}></img></li>
                <li><img src={old_city}></img></li>
                <li><img src={return_home}></img></li>
                <li><img src={alexander}></img></li>
                <li><img src={cloudy_sky}></img></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Artwork