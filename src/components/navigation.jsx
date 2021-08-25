import "assets/css/sb-admin-2.min.css"
import "assets/vendor/fontawesome-free/css/all.min.css"
import {usePageContext} from "contexts/PageContext"
import {useGlobalContext} from "contexts/GlobalContext"
import LoginService from 'services/login'

const NavBar = props => {
    const { userInfo } = useGlobalContext();
    const { movePage } = usePageContext();
    
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
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/contents">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Jskim's Blog</div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"/>

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <a className="nav-link" onClick={()=> { movePage("intro"); }}>
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
                    <a className="nav-link" onClick={()=> { movePage("post"); }}>
                        <i className="fas fa-fw fa-list"></i>
                        <span>게시글</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Free Board  --> */}
                <li className="nav-item">
                    <a className="nav-link" onClick={()=> { movePage("open-board"); }}>
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
                    <a className="nav-link" onClick={()=> { movePage("register"); }}>
                        <i className="fas fa-fw fa-user-plus"></i>
                        <span>회원가입</span>
                    </a>
                </li>

                
                {/* { userInfo.id != "guest" && */}
                    <li className="nav-item" style={{position: "absolute", bottom: "0"}}>
                        <hr className="sidebar-divider" style={{marginBottom : "0px"}}/>
                        <a className="nav-link" onClick={logout}>
                            <i className="fas fa-fw fa-power-off"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                {/* } */}
                

            </ul>
        </>
    )
}

export default NavBar