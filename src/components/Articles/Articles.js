import React, { useState, useEffect } from 'react'
import { Text, FlatList } from 'react-native'
import ArticleRow from './ArticleRow'

const Articles = ({ articles, fetchArticles }) => {
  useEffect(() => { 
    let mounted = false
    if (!mounted) {
      fetchArticles()
    }
  }, [])

  if (articles.length == 0) {
    return (
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>
        Loading...
      </Text>
    )
  }

  return (
    <FlatList
      data={articles}
       renderItem={ArticleRow}
    />
  )
}

export default Articles
