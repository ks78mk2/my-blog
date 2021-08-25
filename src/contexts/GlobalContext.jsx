import React, {useState, useEffect} from 'react'
import _ from 'lodash';

const GlobalContext = React.createContext({})

const GlobalContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({id: null, name: null, auth_level: null});

    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
        }
      }, []);   

    const value = {
        userInfo, setUserInfo,
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
export default GlobalContextProvider