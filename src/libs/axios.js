import axios from 'axios';
import qs from 'qs'

const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const getConfig = (method, path, data) => {
    const url = `${process.env.REACT_APP_HOST}${path}`
    let timeout = process.env.REACT_APP_API_TIMEOUT
    console.log("sdf", process.env)
    let _method = new String(method);
    if (_method && _method.toUpperCase() === 'POST' && url.indexOf('upload') === 0) {
        timeout = 120000
    }

    let config = {
        timeout: timeout,
        method: _method.toUpperCase(),
        url,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type',
            'Accept': 'application/json',
            'Accept-Language': 'ko_KR',
            'Transaction-Key': Date.now()
        }
    }

    if (data) {
        if (config.method === HTTP_METHOD.GET) {
            url = url + (url.indexOf('?') > 0 ? '&' : '?') + qs.stringify(data);
            config.url = url;
        } else {
            config.data = data;
        }
    }
    return config
}

const request = async (method, path, data) => {

    return new Promise(async (resolve, reject) => {
        const {result, error} = await axiosRequest(method, path, data);

        if (error.statusCode == 401) {  //AccessToken 만료 시 refresh
            const {_result, _error} = await refresh_N_reReq(method, path, data); //재발급 및 재요청
            if (_error) {
                reject(history.push('/accounts/login'));
            } else {
                resolve(_result);
            }

        } else if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    })
}

const refresh_N_reReq = (method, path, data) => {
    const {error} = axiosRequest('get', '/auth/refresh', undefined);
    if (error) {    //RefreshToken도 만료 됨
        return {result: null, error};
    } else {        //AccessToken 재발급 후 재 request 요청
        return axiosRequest(method, path, data);
    }
}

const axiosRequest = (method, path, data) => {
    const config = getConfig(method, path, data);
    const promise = axios(config);

    return new Promise((resolve, reject) => {
        promise
            .then((response) => {
                resolve({result: response.data});
            })
            .catch((error) => {
                reject({error})
            })
    })
}

export default request;