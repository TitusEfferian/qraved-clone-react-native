import axios from 'axios'

export function fetchSearchRestorant(query) {
    return axios.get('https://www.qraved.com/api/search/jakarta/restaurants?keyword='+query)
        .then(function (result) {
            return result.data
        })
}