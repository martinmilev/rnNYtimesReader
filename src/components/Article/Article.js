import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Row, Typography, Image } from '../Layout'

const Article = ({ article }) => (
  <ScrollView style={styles.container}>
    <Row style={styles.row}>
      <Typography align={'left'} variant={'caption'}>
        {article.byline}
      </Typography>
      <Typography align={'right'} variant={'caption'}>
        {article.publishedOn}
      </Typography>
    </Row>
    <Row style={styles.row}>
      <Image image={article.media.image} />
    </Row>
    <Row style={styles.row}>
      <Typography variant={'title'}>{article.abstract}</Typography>
    </Row>
  </ScrollView>
)
const styles = StyleSheet.create({
  container: { padding: 5 },
  row: { margin: 10 }
})

export default Article
