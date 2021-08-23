import { axios } from 'libs/index';
import { useGlobalContext } from 'contexts/GlobalContext'

class LoginService {
    login(params: any) {
        return axios('POST', `/auth/login`, params);
    }
}

export default new LoginService();
