import React, { useRef, useState } from 'react'
import { useNavigationContext } from './NavigationContext'
import {Home} from './Home'
import { TriviaGame } from './parts/TriviaGame';
import { TopBar } from './parts/TopBar';
import { StarCrossed } from './parts/StarCrossed';
import { Echo } from './parts/Echo';
import { Aria } from './parts/Aria';
import { DrumMachine } from './parts/DrumMachine';
import './css/Shared.css';
import { OtherProjects } from './parts/OtherProjects';



export function Navigation () {
    
    const navigationContext = useNavigationContext()
    
    function renderContent() {
        if (navigationContext.currentPage === "projects") {
            return (
                <div>
                    <DrumMachine/>
                    <OtherProjects/>
                </div>
            )
        }
        else if (navigationContext.currentPage === "games") {
            return (
                <div>
                    <Echo/>
                    <StarCrossed/>
                    <TriviaGame/>
                </div>
            )
        }
        else {
            return (
                <div>
                    
                    <Home/>
                    <Aria/>
                    <Echo/>
                    <StarCrossed/>
                    <DrumMachine/>
                    {/* <StarCrossed/>
                    <TriviaGame/>
                    <DrumMachine/>
                    <OtherProjects/> */}
                </div>
            )
        }

    }
    
    
    return (
        <div>
            {/* <div id="TopBarBackground">
                <div id="TopBarOption" onClick={() => navigationContext.setCurrentPage("home")}>ABOUT</div>
                <div id="TopBarOption" onClick={() => navigationContext.setCurrentPage("games")}>GAMES</div>
                <div id="TopBarOption" onClick={() => navigationContext.setCurrentPage("projects")}>PROJECTS</div>
            </div> */}
            <div id="content">
                {renderContent()}
            </div>
        </div>
    )

}