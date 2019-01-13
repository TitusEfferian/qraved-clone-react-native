import axios from 'axios'

export function fetchHomePagesApi(){
    return axios.get('https://www.qraved.com/api/homepage?cityId=2')
    .then(function(result){
        return result.data
    })
}