import axios from 'axios'

const SecureAxios = axios.create(
    {
        baseURL:'https://jsonplaceholder.typicode.com'
    }
)

SecureAxios.interceptors.request.use(
    config=>{
        config.headers['Authorization'] ='token'
        return config
    }
    
)

SecureAxios.interceptors.response.use(response=>{
    console.log('Server call is Success')
    return response
},error=>{
    console.log('Error')
    return error
})




export default SecureAxios