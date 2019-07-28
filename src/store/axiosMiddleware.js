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

if (Config.ENV === 'development') {
  let MockAdapter = require('axios-mock-adapter')
  let mock = new MockAdapter(axios)

  mock.onGet(/\/mostpopular\/v2\/viewed\/1/).reply(config => {
    return [
      200, {
        results: [{
          title: 'Brexit: plans in place to mitigate impact of no deal',
          abstract: 'If the UK leaves the EU without a deal, the effects will be felt by people and companies across Europe...',
          published_date: '21-03-2019'
        }, {
          title: 'From the new Commission president to migration: 5 numbers from Strasbourg',
          abstract: 'Parliament elected Ursula von der Leyen as president of the European Commission, with 383 votes out of 733.', 
          published_date: '11-06-2019'
        }, {
          title: 'Brexit: plans in place to mitigate impact of no deal',
          abstract: 'If the UK leaves the EU without a deal, the effects will be felt by people and companies across Europe...',
          published_date: '21-03-2019'
        }, {
          title: 'From the new Commission president to migration: 5 numbers from Strasbourg',
          abstract: 'Parliament elected Ursula von der Leyen as president of the European Commission, with 383 votes out of 733.', 
          published_date: '11-06-2019'
        }, {
          title: 'Brexit: plans in place to mitigate impact of no deal',
          abstract: 'If the UK leaves the EU without a deal, the effects will be felt by people and companies across Europe...',
          published_date: '21-03-2019'
        }, {
          title: 'From the new Commission president to migration: 5 numbers from Strasbourg',
          abstract: 'Parliament elected Ursula von der Leyen as president of the European Commission, with 383 votes out of 733.', 
          published_date: '11-06-2019'
        }]
      }]
  })
}

export default axiosMiddleware(axios, options)
