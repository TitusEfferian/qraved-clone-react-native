import axios from 'axios'

export function fetchHomePagesApi(id){
    return axios.get('https://www.qraved.com/api/homepage?cityId='+id)
    .then(function(result){
        return result.data
    })
}