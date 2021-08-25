import React, {useState, useEffect} from 'react'
import _ from 'lodash';

const PageContext = React.createContext({})

const PageContextProvider = ({children}) => {
    const [page, movePage] = useState("Intro");
    const value = {
        page, movePage
    }
    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () => React.useContext(PageContext)
export default PageContextProvider