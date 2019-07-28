import React, { Fragment,  useState, useEffect } from 'react'
import { Text, ScrollView } from 'react-native'

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
    <ScrollView>
      {articles.map((article, index) => (
          <Text key={index}>{index + 1}: {article.title}</Text>
        )
      )}
    </ScrollView>
  )
}

export default Articles
