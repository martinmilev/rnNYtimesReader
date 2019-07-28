import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { name as appName } from './app.json'
import createStore from './src/store/createStore'
import NYTReader from './src/NYTReader'

const store = createStore({})

const App = () => (
  <Provider store={store}>
    <NYTReader />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App)
