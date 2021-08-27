import React, {useState, useEffect} from 'react'
import _ from 'lodash';

const PageContext = React.createContext({})

const PageContextProvider = ({children}) => {
    const [page, movePage] = useState("intro");
    const [dropDownShow, setDropDownShow] = useState(false);
    const [pageTitle, setPageTitle] = useState("JSKIM'S INFORMATION");

    const zoomIn = (event) => {
        const target = event.target.closest('.scale')
        target.style.transform = "scale(1.025)";
        target.style.zIndex = 1;
        target.style.transition = "all 0.5s";
    }
    
    const zoomOut = (event) => {
        const target = event.target.closest('.scale')
        target.style.transform = "scale(1)";
        target.style.zIndex = 0;
        target.style.transition = "all 0.5s";
    }

    const pageChange =(pageName) => {
        switch (pageName) {
            default:
            case 'intro':
                setPageTitle("JSKIM'S INFORMATION");
                movePage("intro");
                break;
            case 'post':
                setPageTitle("My-Post");
                movePage("post")
                break;
            case 'open-board':
                setPageTitle("자유게시판");
                movePage("open-board");
                break;
        }
    }

    const value = {
        page, dropDownShow, setDropDownShow, pageChange, pageTitle, zoomIn, zoomOut
    }
    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () => React.useContext(PageContext)
export default PageContextProvider