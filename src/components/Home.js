import React, {} from 'react'
import pinkClouds from './assets/pinkClouds.png'
import './css/Shared.css'
import { TopBar } from './parts/TopBar'
import VRIcon from './assets/vr.svg'
import { TriviaGame } from './parts/TriviaGame'
import CombinedGIF from './assets/combined2.gif'
import StarBackground from './assets/star3.gif'
import ocean from './assets/sky.png'
export function Home () {
    
    return (
        <div>
            <div id="BackgroundTeal">
               
            
                {/* <div id="TextBlockDivCenter">
                    <div id="TextBlockTitle">BIO</div>
                    <div id="AboutTextBlock">I'm a programmer and musician currently based in Seattle. I graduated from UCR in 2019 with a 
                    bachelor's in computer science. I'm really passionate about development and writing clean and user-friendly code.
                    This is my portfolio showing some of the projects I've worked on the past few years. </div>
                </div> */}

                <div id="BackgroundVideo">  
                    <img src={ocean} width='100%' height='100%' alt="video gif"></img>
                    {/* <img src={ocean} width='100%' height='100%'></img> */}
                    
                    {/* <div className="triangle"></div> */}
                    <div id="HomeText">
                        I'm a programmer and musician currently based in Seattle. I graduated from UCR in 2019 with a 
                        bachelor's in computer science. I'm really passionate about development and writing clean and user-friendly code.
                        This is my portfolio showing some of the projects I've worked on the past few years.
                    </div>
                </div>

               
            </div>
            

        </div>
    )

}