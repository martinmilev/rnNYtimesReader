import React, { useEffect } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import ArticleRow from './ArticleRow'

const Articles = ({ articles, fetchArticles }) => {
  useEffect(() => { 
    let mounted = false
    if (!mounted) {
      fetchArticles()
    }
  }, [])

  if (articles.length == 0) {
    return <ActivityIndicator size="large" color="#1e272e" />
  }

  return (
    <FlatList
      data={articles}
       renderItem={ArticleRow}
    />
  )
}

export default Articles
