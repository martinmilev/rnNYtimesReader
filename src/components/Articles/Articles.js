import React, { Fragment, useEffect } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import ArticleRow from './ArticleRow'
import RangePicker from './RangePicker'

const Articles = ({ isFetching, articles, range, setRange }) => {
  useEffect(() => {
    let mounted = false
    if (!mounted) {
      setRange(range)
    }
  }, [])

  if (isFetching) {
    return <ActivityIndicator size="large" color="#1e272e" />
  }

  return (
    <Fragment>
      <RangePicker
        selectedValue={range}
        onSelect={setRange}
      />
      <FlatList
        data={articles}
        renderItem={ArticleRow}
        keyExtractor = {item => `${item.id}`}
        onRefresh={() => setRange(range)}
        refreshing={isFetching}
      />
    </Fragment>
  )
}

export default Articles
