import 'assets/css/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const InfoCard = props => {
    console.log(props)
    return (
        <div className="col-xl-4 col-md-6 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-lg font-weight-bold text-black text-uppercase mb-1">
                                <i className={`fas fa-fw fa-${props.icon}`} style={{width: "35px", margin: "0 10px 0 0"}}></i>
                                {props.title}</div>
                            <div className="h5 mb-0 text-black" style={{fontWeight: "550", fontSize: "1rem", margin: "0 0 0 45px"}}>{props.value}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

const IntroView = props => {

    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="container-fluid">
                <div className="align-items-center justify-content-between mb-4" style={{textAlign : "right"}}>    
                    <h1 className="h3 mb-0 text-gray-800" style={{fontSize : '0.9rem'}}>
                        <i className="fas fa-fw fa-home" />
                        {`Home > Introduce`}
                    </h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    <div className="col-xl-12 col-lg-11">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">ABOUT ME</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div style={{display: "flex", flexWrap: "wrap"}}>
                                    <InfoCard title="이름" value="김종성" color="primary" icon="user-alt" />
                                    <InfoCard title="생년월일" value="91.01.01" color="secondary" icon="calendar-alt"/>
                                    <InfoCard title="주소지" value="서울특별시 동작구" color="success" icon="map-marker-alt" />
                                    <InfoCard title="연락처" value="010-2144-2818" color="info" icon="phone-alt"/>
                                    <InfoCard title="이메일" value="ks78mk2@gmail.com" color="warning" icon="envelope" />
                                    <InfoCard title="개발" value="웹 프론트/백엔드" color="danger" icon="laptop-code" />
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-11">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">MY SKILLS</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-11">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">ARCHIVING</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-11">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">CAREER</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-11">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">PROJECT</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </>
    )
}

export default IntroView
