import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Row = ({ children, style }) => {
  if (!style) {
    style = [styles.container]
  } else {
    style = [styles.container, style]
  }

  return <View style={style}>{children}</View>
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' }
})

Row.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.any
}

export default Row
