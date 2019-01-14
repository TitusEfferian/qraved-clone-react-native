import axios from 'axios'

export function fetchCitiesApi(){
    return axios.get('https://www.qraved.com/api/common/cities')
    .then(function(result){
        return result.data
    })
}