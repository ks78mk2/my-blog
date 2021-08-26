import profile from 'assets/images/img/undraw_profile.svg'
import {useGlobalContext} from 'contexts/GlobalContext'
import {usePageContext} from 'contexts/PageContext'
import {useEffect} from 'react'
import {useState} from 'react'
import LoginService from 'services/login'

const TopNavBar = props => {
    const {userInfo} = useGlobalContext();
    const { dropDownShow, setDropDownShow, pageTitle} = usePageContext();
    

    const logout = async () => {
        const {result , error} = await LoginService.guestLogout({id: userInfo.id});
        if (error) {
            console.log(error)
            window.location.href = "/accounts" 
        } else  {
            localStorage.removeItem('userInfo');
            window.location.href = "/accounts" 
        }
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* <!-- Topbar Navbar --> */}
            <div className="sidebar-brand-text mx-3" style={{fontWeight: "900", fontSize: "1.3rem", color: "#454545"}}>{pageTitle}</div>
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow userDropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=> {setDropDownShow(!dropDownShow)}}>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small" style={{position: "relative", top: "2px"}}>{userInfo.name}</span>
                        <img className="img-profile rounded-circle"
                            src={profile} />
                    </a>
                    {/* <!-- Dropdown - User Information --> */}
                    <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${dropDownShow && "show"}`}
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" style={{cursor: "pointer"}}>
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" style={{cursor: "pointer"}}>
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" 
                            data-toggle="modal" data-target="#logoutModal" 
                            style={{cursor: "pointer"}}
                            onClick={logout}>
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default TopNavBar