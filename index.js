import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import NYTReader from './App'
import { name as appName } from './app.json'
import createStore from './src/store/createStore'

const store = createStore({})

const App = () => (
  <Provider store={store}>
    <NYTReader />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App)
