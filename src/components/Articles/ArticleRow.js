import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { Row, Typography } from '../Layout'
import PropTypes from 'prop-types'

const ArticleRow = ({ item }) => (
  <Link to={`/article/${item.id}`}>
    <View style={styles.container}>
      <Row>
        <Typography variant={'title'}>{item.title}</Typography>
      </Row>
      <Row style={styles.footerRow}>
        <Typography align={'right'} variant={'caption'}>
          {item.published_date}
        </Typography>
      </Row>
    </View>
  </Link>
)

const styles = StyleSheet.create({
  container: { borderBottomColor: 'grey', borderBottomWidth: 1, padding: 5 },
  footerRow: { justifyContent: 'flex-end' }
})

ArticleRow.propTypes = {
  item: PropTypes.any.isRequired
}

export default ArticleRow
