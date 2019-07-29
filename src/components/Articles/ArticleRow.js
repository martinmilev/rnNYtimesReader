import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { Row, Typography, Image } from '../Layout'
import PropTypes from 'prop-types'

const ArticleRow = ({ item }) => (
  <Link to={`/article/${item.id}`}>
    <Row style={styles.container}>
      <View style={styles.thumbnail}>
        <Image style={styles.thumbnail} image={item.media.thumbnail} />
      </View>
      <Typography variant={'title'}>{item.title}</Typography>
      <View style={styles.thumbnail}>
      <Typography align={'right'} variant={'caption'}>
        {item.publishedOn}
      </Typography>
      </View>
    </Row>
  </Link>
)

const styles = StyleSheet.create({
  container: { borderBottomColor: 'grey', borderTopWidth: 0.5, padding: 5 },
  thumbnail: { marginRight: 10 },
  footerRow: { justifyContent: 'flex-end' }
})

ArticleRow.propTypes = {
  item: PropTypes.any.isRequired
}

export default ArticleRow
