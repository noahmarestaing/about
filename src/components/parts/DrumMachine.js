import React, {} from 'react'
import '../css/Shared.css'
import drumMachine from '../assets/drumMachine.jpg'
export function DrumMachine () {
    
    return (
        <div id="text">
           
                
          
                <div id="TextBlockTitle">Drum Machine</div>
                <img id="YoutubeVideo" src={drumMachine}></img>
                <div id="description"> I designed this machine for an embedded systems class. It can
                    save and play a programmed sequence of 16 steps with 3 different sounds. It was one of the most fun
                projects that I worked on in college. Documentation can be found <a id="TextBlockLink" href="https://drive.google.com/drive/folders/1vpEXMgVxj9VYnQq-LOogJBeHPH4zzBHG?usp=sharing" target = "_blank" 
    rel = "noopener noreferrer">here</a>.
                </div>
           
            
            
        </div>
    )

}
