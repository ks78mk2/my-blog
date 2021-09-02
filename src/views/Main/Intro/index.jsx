import 'assets/css/login.css'
import {usePageContext} from 'contexts/PageContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import frontEnd from 'assets/images/icon/frontEnd.png'
import backEnd from 'assets/images/icon/backEnd.png'
import version from 'assets/images/icon/version.png'
import deployment from 'assets/images/icon/deployment.png'
import github from 'assets/images/icon/github.png'
import iwill from 'assets/images/icon/iwill.png'
import dajin from 'assets/images/icon/dajin.png'
import uplus_cam from 'assets/images/img/uplus_cam.png'
import liveseeyou from 'assets/images/img/liveseeyou.png'
import myblog from 'assets/images/img/myblog.png'

const ProjectDesc = props => {
    return (
        <div style={{witdh: "100%", display: "flex", marginBottom: "0.5rem"}}>
            <div style={{color: "black", width: "40%", display: "inline-block"}}>
                <i className="fas fa-fw fa-check" style={{width: "35px", margin: "0 10px 0 0"}}></i>
                <b>{props.title}</b>
            </div>
            <div className="desc-font" style={{width: "60%", display: "inline-block"}}>
                {props.href ?
                    (<a href={props.href}>{props.href}</a>)
                    : (props.desc)
                }
            </div>
        </div>
    )
}

const ProjectCard = props => {
    const {zoomIn, zoomOut} = usePageContext();
    return (
        <div className="card-body project-card" style={{textAlign : "center"}}>
            <div className="col-xl-11 col-md-12 mb-4 scale" style={{display: "inline-block"}} onMouseOut={zoomOut} onMouseOver={zoomIn}>
                <div className={`card shadow h-100 py-2`}>
                    <div className="row no-gutters align-items-center">
                        <div className="col" style={{ textAlign: "center" }}>
                            <div><h3 className="project-h3">{props.title}</h3></div>
                            <div style={{ display:"flex", flexWrap: "wrap", verticalAlign:"middle", margin: "3rem"}}>
                                <div className="col-xl-6">
                                    <img style={{width: "100%"}} src={props.image} />
                                </div>
                                <div className="col-xl-6" style={{width: "100%", display: "inline-block", textAlign: "left", padding: "0.5rem 0 0 2rem"}}>
                                    <div className="margin-bottom-10"><h5>{props.sub_title}</h5></div>
                                    <div className="margin-bottom-20" style={{fontWeight: "500", color: "gray"}}> {props.date}</div>
                                    <div className="margin-bottom-10">
                                        {props.children}                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                        
                </div>
            </div>
        </div>
    )
}

const InfoCard = props => {
    const {zoomIn, zoomOut} = usePageContext();
    return (
        <div className="col-xl-4 col-md-6 mb-4 scale" onMouseOut={zoomOut} onMouseOver={zoomIn}>
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

const SkillsCard = props => {
    const {zoomIn, zoomOut} = usePageContext();
    return (
        <div className="col-xl-3 col-md-6 mb-4 scale" onMouseOut={zoomOut} onMouseOver={zoomIn}>
            <div className={`card shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col" style={{ textAlign: "center" }}>
                            <div className="text-lg font-weight-bold text-black text-uppercase mb-1">
                                {props.title}</div>
                            <hr style={{borderTop: "1.5px solid #b7b9be"}}/>
                            <div style={{ display:"table-cell", verticalAlign:"middle"}}>
                                <img style={{maxWidth: "100%"}}src={props.logo_img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

const IntroView = props => {
    const {zoomIn, zoomOut} = usePageContext();
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="align-items-center justify-content-between mb-4" style={{textAlign : "right", width: "100%", maxWidth: "1700px", padding: "0 12px 0 12px"}}>    
                        <h1 className="h3 mb-0 text-gray-800" style={{fontSize : '0.9rem'}}>
                            <i className="fas fa-fw fa-home" />
                            {`Home > Introduce`}
                        </h1>
                    </div>
                </div>
                

                {/* <!-- Content Row --> */}
                <div className="row">
                    <div className="col-xl-12 col-lg-11" style={{maxWidth: "1700px"}}>
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

                    <div className="col-xl-12 col-lg-11" style={{maxWidth: "1700px"}}>
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">MY SKILLS</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div style={{display: "flex", flexWrap: "wrap"}}>
                                    <SkillsCard title="Front-End" logo_img={frontEnd} />
                                    <SkillsCard title="Back-End" logo_img={backEnd} />
                                    <SkillsCard title="Version" logo_img={version} />
                                    <SkillsCard title="Deployment" logo_img={deployment} />
                                </div>     
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-11" style={{maxWidth: "1700px"}}>
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">ARCHIVING</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="card-in-div">
                                    <img style={{ width: "15%"}}src={github} />
                                    <div style={{ width: "97%" }}><hr style={{borderTop: "1.5px solid #b7b9be"}}/></div>
                                    <div>
                                        <div style={{float: "left"}}> 
                                            <div className="margin-bottom-10"> GIT Address </div>
                                            <div> Explanation </div>
                                            <div><br/></div>
                                        </div>
                                        <div className="desc-right div-board-left">
                                            <div className="margin-bottom-10"><a href={"https://github.com/ks78mk2"}>https://github.com/ks78mk2</a></div>
                                            <div> <p className="desc-font">Study & Try 목적으로 관리하는 Git Repository <br/> Jskim's Blog의 FrontEnd & BackEnd, Nginx, Mysql을 포함한 Docker-Compose Repository (my-blog*)</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-11" style={{maxWidth: "1700px"}}>
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">CAREER</h5>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="card-in-div">
                                    <div style={{overflow: "auto"}}>
                                        <div style={{minWidth: "100px", width: "13%", height: "100%", float: "left"}}> 
                                            <img style={{ width: "100%"}}src={iwill} />
                                        </div>
                                        <div className="desc-right div-board-left" style={{width: "70%", marginTop : "20px"}}>
                                            <div className="margin-bottom-10"><h5>(주) 아이윌시스템즈</h5></div>
                                            <div className="margin-bottom-20" style={{fontWeight: "500", color: "gray"}}> 2018.08 ~ 현재</div>
                                            <div className="margin-bottom-10">
                                                <p className="desc-font"> 산업 및 교육시설 등, 현장 상황의 위험요소 및 부정행위의 감시를 위한 <b>실시간/VOD영상제공 솔루션</b> 회사입니다. </p> 
                                                <div className="desc-font"> 
                                                    저는 현재 <b>R&D부서 - WEB개발팀</b> 팀장을 맡고 있으며, 주 업무로는 기존 서비스의 유지보수 및 사용자 요청에 따른 Service Patch와,
                                                    새 프로젝트의 Server 설계 및 웹개발을 담당하고 있습니다. 
                                                    주로 BackEnd 개발에는 <b>Express, Nest.js</b>를 사용하고 있으며, FrontEnd 개발은 <b>Vanilla js, Vue, React</b>로 개발작업을 진행하였습니다. 
                                                </div> 
                                                <div style={{ width: "97%" }}><hr style={{borderTop: "1.5px solid #b7b9be"}}/></div>
                                                <div style={{ marginBottom: "20px" }}>
                                                    <div className="div-head">▎</div>
                                                    <div style={{paddingLeft: "20px", display: "inline-block"}}>영상서비스 유지보수</div>
                                                    <ul className="ul-li-font">
                                                        <li>LG U+, Display 등 각 산업현장에 적용된 산업용/드론직캠 웹 서비스 관리</li>
                                                        <li>해당 서비스의 Bug-Fix</li>
                                                        <li>사용자 요청에 따른 추가기능 개발</li>
                                                        <li>서비스 웹 소스 Refactoring</li>
                                                    </ul>
                                                </div>
                                                <div style={{ marginBottom: "20px" }}>
                                                    <div className="div-head">▎</div>
                                                    <div style={{paddingLeft: "20px", display: "inline-block"}}>온라인 시험감독 프로젝트</div>
                                                    <ul className="ul-li-font">
                                                        <li>코로나로 인한 대학 시험감독 서비스</li>
                                                        <li>서버 설계 및 웹개발 진행 담당</li>
                                                        <li>서비스 시나리오 정의 및 설계 참여</li>
                                                        <li>실제 대학시험 서비스 테스트 진행</li>
                                                    </ul>
                                                </div>
                                                <div style={{ marginBottom: "20px" }}>
                                                    <div className="div-head">▎</div>
                                                    <div style={{paddingLeft: "20px", display: "inline-block"}}>개발업무 및 기타</div>
                                                    <ul className="ul-li-font">
                                                        <li>Drone Window App(Electron), 서비스 뷰어(C++ Window app)간 제어기능 개발</li>
                                                        <li>최신 WEB개발 환경으로 기존 서비스 리뉴얼 작업 진행</li>
                                                        <li>WEB개발자 채용 담당 (서류 평가 및 면접 평가 진행)</li>
                                                        <li>신입 WEB개발자 교육</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-in-div">
                                    <div style={{overflow: "auto"}}>
                                        <div style={{minWidth: "100px", width: "13%", height: "100%", float: "left", paddingTop : "50px"}}> 
                                            <img style={{ width: "100%"}}src={dajin} />
                                        </div>
                                        <div className="desc-right div-board-left" style={{width: "70%", paddingTop : "58px"}}>
                                            <div className="margin-bottom-10"><h5>(주) 다진시아이엠</h5></div>
                                            <div className="margin-bottom-20" style={{fontWeight: "500", color: "gray"}}> 2015.02 ~ 2018.07</div>
                                            <div className="margin-bottom-10">
                                                <p className="desc-font"> <b>유류/액화가스 출하자동화</b> 설비의 생산 및 유지보수 업무를 담당했던 회사입니다. </p> 
                                                <div className="desc-font"> 
                                                    R&D팀 신입으로 입사하였으며, 담당했던 업무는 제품 문제 발생 시 현장출동하여 처리하는 After-Service 업무 및 <br />
                                                    임베디드 프로그래밍(C++), 전자 회로설계 업무를 담당하였습니다.
                                                </div> 
                                                <div style={{ width: "97%" }}><hr style={{borderTop: "1.5px solid #b7b9be"}}/></div>
                                                <div style={{ marginBottom: "20px" }}>
                                                    <div className="div-head">▎</div>
                                                    <div style={{paddingLeft: "20px", display: "inline-block"}}>출하자동화 제품 유지보수</div>
                                                    <ul className="ul-li-font">
                                                        <li>SK에너지, SK가스 등 공장 내 출하자동화 제품 유지보수</li>
                                                        <li>현장 상황에 따른 유류/가스 출하 계산 값, Log분석으로 이슈상황 조치</li>
                                                        <li>C++ 코드 분석 및 기능 수정/개발</li>
                                                    </ul>
                                                </div>
                                                <div style={{ marginBottom: "20px" }}>
                                                    <div className="div-head">▎</div>
                                                    <div style={{paddingLeft: "20px", display: "inline-block"}}>정부과제(MES)</div>
                                                    <ul className="ul-li-font">
                                                        <li>Tank내 제품 Level 측정 및 모니터링, 이력 등 생산관리시스템 개발</li>
                                                        <li>Zigbee 모듈을 이용한 무선통신/ Tank Level Monitoring Program 개발 (C++ MFC, C)</li>
                                                        <li>소형 드럼통 내 제품 출하제어 제품 회로설계 및 생산</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 프로젝트 */}
                    <div className="col-xl-12 col-lg-11" style={{maxWidth: "1700px"}}>
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between" style={{marginBottom: "2.5rem"}}>
                                <h5 className="m-0 font-weight-bold text-primary">PROJECT</h5>
                            </div>
                            {/* <!-- Card Body 산업용직캠 --> */}
                            <ProjectCard title="U+산업용/드론 직캠" sub_title="서비스 유지보수 & 신규기능 Update" image={uplus_cam} date="2018.08 ~ 현재">
                                <p className="desc-font"> 자체 네트워크망에서 구동되는 <b>현장 작업 안전을 위한 모니터링 서비스</b>입니다.</p> 
                                <p className="desc-font"> 현 회사로 이직한 뒤, LG U+클라우드 기반 산업용/드론 직캠 서비스 및 전 지역 현장에 구축형 기반으로 사용하는 <b>서비스의
                                    유지보수 및 추가 기능 개발 & 보안취약점 대응이슈 & 제어고도화 프로젝트</b> 등의 업무를 수행 하였습니다.
                                </p> 
                                <p className="desc-font"> 이직 6개월차부터 팀장 및 동료 직원의 퇴사로 인하여 약 1년간 해당 업무를 혼자 진행하였으며, 이 기간 중 웹 서비스의 대한 지식과 스킬을 성장시킬 수 있었으며, 현재는 부사수와 함께 해당 업무를 진행하고 있습니다.
                                </p> 
                                <div style={{ width: "97%" }}><hr style={{borderTop: "1.5px solid #b7b9be"}}/></div>
                                <ProjectDesc title="주요기능" desc="실시간 모니터링, 지난영상 다시보기, 사용자 등급별 영상 수신/발신 권한 제어기능 등"></ProjectDesc>
                                <ProjectDesc title="Front-End" desc="Html + Css + Jquery"></ProjectDesc>
                                <ProjectDesc title="Back-End" desc="Express"></ProjectDesc>
                                <ProjectDesc title="Domain" desc="기업 인트라넷"></ProjectDesc>
                                <ProjectDesc title="Deployment" desc="자체 서버 Git Repository"></ProjectDesc>
                            </ProjectCard>
                            {/* <!-- Card Body 온라인 시험감독--> */}
                            {/* <!-- Card Body 포트폴리오 & 블로그--> */}
                            <ProjectCard title="Liveseeyou - 온라인 시험감독" sub_title="비대면 시험감독 서비스" image={liveseeyou} date="2020.09 ~ 2020.12">
                                <p className="desc-font"> 코로나로 인한 온라인 대학시험 Case가 증가하여 학생 개인의 모바일 App으로 영상 발신 후, <b>감독관 실시간 모니터링 웹서비스</b>를 개발하였습니다. </p>
                                <p className="desc-font"> 단기간 내 <b>기획 및 UI/UX 설계, 개발</b>까지 완료해야하는 프로젝트 였습니다. 프로젝트 진행 전 개인적으로 최적화된 <b>Express Web API 처리의 Component화</b>를 위한 웹서버를 개발 중이었기에 신속하게 개발할 수 있었습니다.
                                </p> 
                                <div style={{ width: "97%" }}><hr style={{borderTop: "1.5px solid #b7b9be"}}/></div>
                                <ProjectDesc title="주요기능" desc="시험감독 실시간 모니터링, 시험생성 안내 및 회원가입 알림용 메일 송/수신 등"></ProjectDesc>
                                <ProjectDesc title="Front-End" desc="Vue.js + Css"></ProjectDesc>
                                <ProjectDesc title="Back-End" desc="Express"></ProjectDesc>
                                <ProjectDesc title="Domain" href="https://liveseeyou.com"></ProjectDesc>
                                <ProjectDesc title="Deployment" desc="자체 서버 Git Repository"></ProjectDesc>
                            </ProjectCard>
                            {/* <!-- Card Body 포트폴리오 & 블로그--> */}
                            <ProjectCard title="포트폴리오 & 블로그" sub_title="Jskim's Blog" image={myblog} date="2021.07 ~ 현재">
                            <p className="desc-font"> Front-End, Back-End 프레임워크 개발능력 향상 이외에도 <b>Docker Container</b>을 이용한 개발환경 구축 및 Jenkins와 Github연동으로 <b>Git Push - Jenkins - Oracle Cloud 배포 및 서버 자동 재시작</b>까지 동작되는 Blog 개발을 진행하였습니다.</p> 
                                <p className="desc-font"> 제 개인 Blog 개발을 진행하면서 느낀점으로는 현재까지 저는 단순 Skill향상을 위한 개발에 급급 했었지만 이번 Blog를 개발하면서 사용한 <b>Cloud Web Service, Docker Container, 기타 개발환경 구성</b> 등 익숙하지 않았던 분야에 조금 더 넓은 시야를 가지고 개발에 임할 수 있게 되었습니다.
                                </p> 
                                <div style={{ width: "97%" }}><hr style={{borderTop: "1.5px solid #b7b9be"}}/></div>
                                <ProjectDesc title="주요기능" desc="Git + Jenkins + Cloud + Docker 기반 자동배포 웹서비스, 개인블로그 "></ProjectDesc>
                                <ProjectDesc title="Front-End" desc="React, Css"></ProjectDesc>
                                <ProjectDesc title="Back-End" desc="Nest.js"></ProjectDesc>
                                <ProjectDesc title="Domain" href="https://www.ks78mk2.ga"></ProjectDesc>
                                <ProjectDesc title="GitHub" href="https://github.com/ks78mk2/myblog-docker"></ProjectDesc>
                                <ProjectDesc title="Deployment" desc="Oracle Cloud, Docker, Jenkins, Github, Nginx"></ProjectDesc>
                            </ProjectCard>
                        </div>
                    </div>
                    {/* 프로젝트 */}
                </div>
            </div>            
        </>
    )
}

export default IntroView
