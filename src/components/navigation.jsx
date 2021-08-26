import "assets/vendor/fontawesome-free/css/all.min.css"
import {usePageContext} from "contexts/PageContext"
import {useGlobalContext} from "contexts/GlobalContext"
import { useState } from 'react'

const NavBar = props => {
    const { userInfo } = useGlobalContext();
    const { pageChange } = usePageContext();
    const [toggled, setToggled] = useState(false);
    
    return (
        <>
            <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggled && "toggled"}`} id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" onClick={()=> { pageChange("intro"); }}>
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Jskim's Blog</div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"/>

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <a className="nav-link" onClick={()=> { pageChange("intro"); }}>
                        <i className="far fa-id-card"></i>
                        <span>Introduce</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"/>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Blog
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link" onClick={()=> { pageChange("post"); }}>
                        <i className="fas fa-fw fa-list"></i>
                        <span>게시글</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Free Board  --> */}
                <li className="nav-item">
                    <a className="nav-link" onClick={()=> { pageChange("open-board"); }}>
                        <i className="fas fa-fw fa-keyboard"></i>
                        <span>자유게시판</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"/>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    ACCOUNT
                </div>

                { userInfo.id == "guest" &&
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=> { window.location.href = "/accounts" }}>
                            <i className="fas fa-fw fa-sign-in-alt"></i>
                            <span>Login</span>
                        </a>
                    </li>
                }

                <li className="nav-item">
                    <a className="nav-link" onClick={()=> { pageChange("register"); }}>
                        <i className="fas fa-fw fa-user-plus"></i>
                        <span>회원가입</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={()=> { setToggled(!toggled) }}></button>
                </div>
            </ul>
        </>
    )
}

export default NavBar