import { Carousel } from 'react-responsive-carousel';
import 'assets/css/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LoginView = props => {
    return (
        <>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
            <div style={{height : "100%"}}>
                <section className="login-block" style={{position : "absolute", top: "50%", margin: "-350px 0 0 0"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                                        <input type="text" className="form-control" placeholder=""/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                        <input type="password" className="form-control" placeholder=""/>
                                    </div>
                                    
                                    
                                    <div className="form-check">
                                        <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input"/>
                                        <small>Remember Me</small>
                                        </label>
                                        <button type="submit" className="btn btn-login float-right">Submit</button>                                        
                                    </div>                        
                                </form>
                                <div style={{margin: "20px 0 0 0"}}>
                                    <button className="btn btn-login float-right" style={{width : "76.05px"}}>Guest</button>                                        
                                </div>                                
                                <div className="copy-text">Created with <i className="fa fa-heart"></i> by Jskim</div>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <Carousel>
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" style={{filter : "brightness(65%)"}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>WEB Developer</h2>
                                                <p style={{ textAlign :"left"}}>
                                                    Web Frontend & Backend 개발자 김종성's Blog<br/><br/>
                                                    저의 Blog의 방문해주신 것을 환영합니다.<br/>
                                                    처음 오신분은 Guest로 입장해주시기 바랍니다.
                                                </p>
                                                
                                            </div>	
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                    <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" style={{filter : "brightness(65%)"}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>Go-Ahead</h2>
                                                <p style={{ textAlign :"left"}}>
                                                    WEB Study를 위한 Blog입니다.<br/>
                                                    Developped by <br/>
                                                    <span style={{padding: "0 0 0 20px"}}>Nest.js, React, Mysql, Nginx, Docker, jenkins</span>
                                                </p>
                                            </div>	
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </>
    )
}

export default LoginView
