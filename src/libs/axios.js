import axios from 'axios';

export const request = (method, url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data
        })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            })
    })

}