const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/axax1499/Numerical_Method_main'
})

const getRoot = () => api.post('http://localhost:3000/Root_of_Equation')
const getMatrix = () => api.get('/matrix')
const getInterpolation = () => api.get('/interpolation')
const getRegression = () => api.get('/regression')

const apis = {
    getRoot,
    getMatrix,
    getInterpolation,
    getRegression
}

export default apis