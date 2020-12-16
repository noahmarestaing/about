import React, {} from 'react'
import '../css/Shared.css'
import EchoGif from '../assets/echo.gif'
import StarGif from '../assets/star.gif'
export function Echo () {
    
    return (
        <div id="text">
            {/* <div id="BackgroundTeal">
                <div id="ContentBlock">
                    <div id="TextBlockDivLeft">
                        <div id="TextBlockTitle">ECHO IN THE MIRROR</div>
                        <div id="AboutTextBlock">This was the first game I worked on in college. It's a Zelda-inspired rpg in the style
                        of Link to the Past. I worked on music and sound effects for this demo
                        which can be found <a id="TextBlockLink" href="https://gamespawn.github.io/projects/Echo_In_The_Mirror.html" target = "_blank" 
    rel = "noopener noreferrer">here</a>.
                        </div>
                    </div>
                    <div id="RightMediaDiv">
                        <iframe id="YoutubeVideo" src="https://www.youtube.com/embed/3_RlV9PrQlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div> */}
            <div id="TextBlockTitle"> Echo in the Mirror</div>
            <iframe id="YoutubeVideo" src="https://www.youtube.com/embed/3_RlV9PrQlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div id="description"> This was the first game I worked on in college. It's a Zelda-inspired rpg in the style
                of Link to the Past. I worked on music and sound effects for this demo
                which can be found <a id="TextBlockLink" href="https://gamespawn.github.io/projects/Echo_In_The_Mirror.html" target = "_blank" 
                rel = "noopener noreferrer">here</a>.
            </div>
            
        </div>
    )

}