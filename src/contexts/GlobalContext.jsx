import React from 'react'
import _ from 'lodash';

const GlobalContext = React.createContext({})

const GlobalContextProvider = ({children}) => {
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
export default GlobalContextProvider