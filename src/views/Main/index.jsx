import NavBar from "components/navigation"
import PageContextProvider, {usePageContext} from "contexts/PageContext";
import IntroView from "views/Main/Intro"
import PostView from "views/Main/Post"
import React, { useEffect } from 'react'
import "assets/css/sb-admin-2.min.css"
import "assets/css/google.font.css"
import {useGlobalContext} from "contexts/GlobalContext";

const ContentView = () => {
    const { page } = usePageContext();

    switch (page) {
        default:
        case 'intro':
            return <IntroView />
        case 'post':
            return <PostView />            
    }
}

const Wrapper = () => {
    return (
        <div id ="wrapper">
            <NavBar />
            <ContentView />
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