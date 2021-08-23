import React, {useState, useEffect} from 'react'
import _ from 'lodash';

const GlobalContext = React.createContext({})

const GlobalContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({ id :null, auth_level: null });
    const value = {
        userInfo, setUserInfo
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
export default GlobalContextProvider