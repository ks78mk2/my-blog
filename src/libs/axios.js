import axios from 'axios';
import qs from 'qs'

const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const getConfig = (method, path, data) => {
    const url = `${process.env.HOST}/${path}`
    if (method && method.toUpperCase() === 'POST' && _url.indexOf('upload') === 0) {
        timeout = 120000
    }

    let config = {
        timeout: timeout,
        method: method.toUpperCase(),
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

export const request = async (method, path, data) => {

    return new Promise((resolve, reject) => {
        const {Result, error} = await axiosRequest(method, path, data);

        if (error.statusCode == 401) {  //AccessToken 만료 시 refresh
            const {Result, error} = await refresh_N_reReq(method, path, data); //재발급 및 재요청
            if (error) {
                reject(history.push('/accounts/login'));
            } else {
                resolve(Result);
            }

        } else if (error) {
            reject(error);
        } else {
            resolve(Result);
        }
    })

}

const refresh_N_reReq = async (method, path, data) => {
    const {error} = await axiosRequest('get', '/auth/refresh', undefined);
    if (error) {    //RefreshToken도 만료 됨
        return {error};
    } else {        //AccessToken 재발급 후 재 request 요청
        return await axiosRequest(method, path, data);
    }
}

const axiosRequest = (method, path, data) => {
    const config = getConfig(method, path, data);
    const promise = axios(config);
    promise
        .then(function (response) {
            return {Result: response.data};
        })
        .catch(function (error) {
            return {error}
        })
}