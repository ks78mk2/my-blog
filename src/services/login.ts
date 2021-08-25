import { axios } from 'libs/index';
import { useGlobalContext } from 'contexts/GlobalContext'

class LoginService {
    login(params: any) {
        return axios('POST', '/auth/login', params);
    }
    logout(params: any) {
        return axios('POST', '/auth/logout', params);
    }
    guestLogin(params: any) {
        return axios('POST', '/auth/login/guest', params);
    }
    guestLogout(params: any) {
        return axios('POST', '/auth/logout/guest', params);
    }
}

export default new LoginService();
