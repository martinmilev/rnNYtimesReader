import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Row, Typography } from '../Layout'

const Article = ({ article }) => (
  <View style={styles.container}>
      <Row style={styles.row}>
        <Typography variant={'header'}>{article.title}</Typography>
      </Row>
      <Row style={styles.row}>
        <Typography align={'left'} variant={'caption'}>
          {article.byline}
        </Typography>
        <Typography align={'right'} variant={'caption'}>
          {article.published_date}
        </Typography>
      </Row>
      <Row style={styles.row}>
        <Typography variant={'title'}>{article.abstract}</Typography>
      </Row>
    </View>
)
const styles = StyleSheet.create({
  container: { padding: 5 },
  row: { margin: 10 }
})

export default Article
