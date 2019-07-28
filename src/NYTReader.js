import React, { Fragment } from 'react'
import { StatusBar, Text } from 'react-native'
import Articles from './components/Articles'

const NYTReader = () => (
  <Fragment>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    <Text style={{ fontSize: 24, alignSelf: 'center' }}>
      RN New York Times Reader
    </Text>
    <Articles />
  </Fragment>
)

export default NYTReader
