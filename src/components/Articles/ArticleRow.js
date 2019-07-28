import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import { Row, Typography } from '../Layout'
import PropTypes from 'prop-types'

const ArticleRow = ({ item }) => (
  <View style={styles.container}>
    <Row>
      <Typography variant={'title'}>{item.title}</Typography>
    </Row>
    <Row>
      <Typography variant={'subheading'}>{item.abstract}</Typography>
    </Row>
    <Row style={styles.footerRow}>
      <Typography variant={'caption'}>{item.published_date}</Typography>
    </Row>
  </View>
)

const styles = StyleSheet.create({
  container: { borderBottomColor: 'grey', borderBottomWidth: 1, padding: 5 },
  footerRow: { justifyContent: 'flex-end' }
})

ArticleRow.propTypes = {
  item: PropTypes.any.isRequired
}

export default ArticleRow
