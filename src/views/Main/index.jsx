import NavBar from "components/navigation"
import TopNavBar from "components/top-nav"
import PageContextProvider, {usePageContext} from "contexts/PageContext";
import IntroView from "views/Main/Intro"
import PostView from "views/Main/Post"
import React, { useEffect } from 'react'
import "assets/css/global.min.css"
import "assets/css/google.font.css"
import {useGlobalContext} from "contexts/GlobalContext";
import OpenBoardView from "./OpenBoard";

const ContentView = () => {
    const { page } = usePageContext();

    switch (page) {
        default:
        case 'intro':
            return <IntroView />
        case 'post':
            return <PostView />            
        case 'open-board':
            return <OpenBoardView />            
    }
}

const Wrapper = () => {
    const { dropDownShow, setDropDownShow } = usePageContext();

    const handleDropDonw = (e) => {
        if (dropDownShow) {
            const clicked = e.target.closest('.userDropdown');        
            if (!clicked) {
                setDropDownShow(false);
            }
        }        
    };

    return (
        <div id ="wrapper" onClick={(e)=> {handleDropDonw(e)}}>
            <NavBar />
            <div id="content-wrapper" class="d-flex flex-column">
                {/* <!-- Main Content --> */}
                <div id="content">
                    <TopNavBar />
                    <ContentView />
                </div>
            </div>
        </div>
    )
}

const MainView = props => {
    return (
        <PageContextProvider>
            <Wrapper />
        </PageContextProvider>
    )
}

export default MainView