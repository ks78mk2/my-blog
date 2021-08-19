class LoginService {

    public config(): any {
        return { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Cache-Control': `no-cache` }
    };



    getChannelList(params: any) {
        // return axios.get(`${baseUrl}/api/v1/controls/online/channel`, { params: params, headers: this.config() });
    }
}

export default new LoginService();
