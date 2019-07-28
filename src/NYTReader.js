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
    header: () => <Header title={'New York Times Most Viewed Articles'} />,
    main: () => <Articles />
  },
  {
    path: '/article/:id',
    header: () => <Header title={''} />,
    main: props => <Article {...props} />
  }
]

const NYTReader = ({ history }) => (
  <Fragment>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    {routes.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        render={props => (
          <Fragment>
            <route.header history={history} />
            <route.main {...props} history={history} />
          </Fragment>
        )}
      />
    ))}
  </Fragment>
)

export default NYTReader
