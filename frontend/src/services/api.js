import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-money-app.herokuapp.com/api'
})

export default api