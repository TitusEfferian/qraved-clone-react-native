import axios from 'axios'

export function fetchHomePagesApi() {
    return axios.get('https://www.qraved.com/api/search/jakarta/restaurants?keyword=burger')
        .then(function (result) {
            return result.data
        })
}