import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import Config from 'react-native-config'

axios.defaults.baseURL = Config.API_URL

const options = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({}, request) => {
        request.url = `${request.url}.json?api-key=${Config.API_KEY}`
        return request
      }
     ]
  }
}

export default axiosMiddleware(axios, options)
