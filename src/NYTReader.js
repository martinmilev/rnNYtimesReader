import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import Articles from './components/Articles'
import { Header } from './components/Layout'

const NYTReader = () => (
  <Fragment>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    <Header title={'New York Times Most Viewed Articles'} />
    <Articles />
  </Fragment>
)

export default NYTReader