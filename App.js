import React, { Fragment,  useState, useEffect } from 'react'
import { Text, ScrollView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import Config from 'react-native-config'
import { fetchArticles, articles } from './src/redux/modules/articles'

const App = ({ articles, fetchArticles }) => {
  useEffect(() => { 
    let mounted = false
    if (!mounted) {
      fetchArticles()
    }
  }, [])

  console.log('r', articles)

  return (
    <Fragment>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>
        RN New York Times Reader
      </Text>
      {articles.length == 0 ? (
        <Text style={{ fontSize: 24, alignSelf: 'center' }}>
          Loading...
        </Text>
      ) : (
        <ScrollView>
          {articles.map((article, index) => (
              <Text key={index}>{index + 1}: {article.title}</Text>
            )
          )}
        </ScrollView>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({ articles: articles(state) })

const mapDispatchToProps = { fetchArticles }

export default connect(mapStateToProps, mapDispatchToProps)(App)
