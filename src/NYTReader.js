import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import { Route } from 'react-router-native'
import { Header } from './components/Layout'
import Articles from './components/Articles'
import Article from './components/Article'

const routes = [
  {
    path: '/',
    exact: true,
    header: props => <Header title={'New York Times Most Viewed Articles'} {...props} />,
    main: () => <Articles />
  },
  {
    path: '/article/:id',
    header: props => <Header title={''} {...props} />,
    main: props => <Article {...props} />
  }
]

const NYTReader = () => (
  <Fragment>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    {routes.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        render={props => (
          <Fragment>
            <route.header history={props.history} />
            <route.main {...props} />
          </Fragment>
        )}
      />
    ))}
  </Fragment>
)

export default NYTReader
