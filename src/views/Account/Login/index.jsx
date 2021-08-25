import { Carousel } from 'react-responsive-carousel';
import 'assets/css/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import LoginService from 'services/login'
import {useGlobalContext} from 'contexts/GlobalContext';

const LoginView = props => {
    const { userInfo, setUserInfo } = useGlobalContext();
    const [loginResult, setLoginResult] = useState({state: true, message: ''});
    const [loginData, setLoginData] = useState(null);

    const login = async (id=null) => {
        let res = {};
        if (id == 'guest') {
            res = await LoginService.guestLogin({id: 'guest'});
        } else {
            res = await LoginService.login(loginData);
        }        
        if (res.error) {
            setLoginResult({state: false, message : error.message});
        } else  {
            const data = res.result.data;
            setUserInfo({id :data.id, name: data.name, auth_level: data.auth_level});
            localStorage.setItem('userInfo', JSON.stringify({id :data.id, name: data.name, auth_level: data.auth_level}));
            props.history.push("/contents")
        }
    }

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
                                <Formik
                                    className="login-form"
                                    initialValues={{
                                        id: '',
                                        password: '',
                                    }}
                                    validationSchema={Yup.object().shape({
                                        id: Yup.string().required('아이디를 입력바랍니다.')
                                        .test('id_valid', '아이디는 4~20자의 영문 또는 영문+숫자만 가능합니다.', (value, values) => {
                                            
                                            return /^[a-zA-Z0-9]{4,20}$/.test(values.parent.id)
                                        }),
                                        password: Yup.string().required('비빌번호를 입력바랍니다.')
                                        .test('password_valid', '비밀번호는 8~20자의 영문+숫자+특수문자의 조합만 가능합니다.',(value, values) => {
                                            if (values.parent.password) {
                                                const _password = values.parent.password;
                                                if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(_password)) {
                                                    return false
                                                }
    
                                                let chk_num = _password.search(/[0-9]/g);
                                                let chk_eng = _password.search(/[a-z]/ig);
                                                if (chk_num <0 || chk_eng <0) {
                                                    return false;
                                                }
                                                return true;
                                            }
                                            
                                        }),
                                    })}
                                    onSubmit={(values, { props, resetForm, setErrors, setSubmitting }) => {
                                        login(values);
                                    }}
                                >
                                {({
                                    errors,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    submitCount,
                                    touched,
                                    values,
                                    setFieldValue
                                })=> { 
                                    return (
                                        <form className="login-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1" className="text-uppercase">ID</label>
                                                <input type="text" className="form-control" placeholder="아이디를 입력해주세요." 
                                                    name="id"
                                                    id="id"
                                                    value={values.id}
                                                    onBlur={(e) => {
                                                        handleBlur(e)
                                                    }}
                                                    onChange={(e) => {
                                                        if(e.target) {
                                                            setLoginData({...loginData, id: e.target.value});
                                                            setFieldValue('id', e.target.value)
                                                        }                                                        
                                                    }}
                                                />
                                                {/* {(touched.id || submitCount > 0) && <p className="info-message negative">{`ID는 4~20글자의 영문만 입력 가능합니다.`}</p>} */}
                                                {(touched.id || submitCount > 0) && <p className="info-message negative" style={{margin : "5px 0 0 0"}}>{errors.id}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                                <input type="password" className="form-control" placeholder="비밀번호를 입력해주세요."
                                                    name="password"
                                                    id="password"
                                                    value={values.password}
                                                    onBlur={(e) => {
                                                        handleBlur(e)
                                                    }}
                                                    onChange={(e) => {
                                                        if(e.target) {
                                                            setLoginData({...loginData, password: e.target.value});
                                                            setFieldValue('password', e.target.value)
                                                        }
                                                    }}
                                                />
                                                {(touched.password || submitCount > 0) && <p className="info-message negative" style={{margin : "5px 0 0 0"}}>{errors.password}</p>}
                                            </div>
                                            
                                            {/* <div style={{margin: "20px 0 0 0"}}>
                                                
                                                <button className="btn btn-login float-right" style={{width : "76.05px"}} 
                                                    onClick={(e) => {
                                                        login({id: "guest", password: "password"});
                                                }}>Guest</button>                                        
                                            </div>   */}
                                            
                                            <div style={{textAlign : "right"}}>
                                                {/* <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"/>
                                                <small>Remember Me</small>
                                                </label> */}       
                                                { !loginResult.state && <div style={{float: "left"}}><p className="info-message negative">{loginResult.message}</p></div>}              
                                                <button type="submit" style={{width : "76.05px"}}  className="btn btn-login">Login</button>          
                                            </div>                        
                                            <div style={{textAlign : "right"}}>
                                                <button className="btn btn-login" style={{width : "76.05px", margin: "7px 0 0 0"}} 
                                                onClick={(e) => {
                                                    login('guest');
                                                }}>Guest</button>
                                            </div>
                                        </form>
                                    )
                                }}    
                                </Formik>
                                <div className="copy-text">Created with <i className="fa fa-heart"></i> by Jskim</div>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <Carousel>
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" style={{filter : "brightness(65%)"}}/>
                                        <div className="carousel-caption d-md-block">
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
                                        <div className="carousel-caption d-md-block">
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
