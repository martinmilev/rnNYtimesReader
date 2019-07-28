import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Typography = ({ variant, color, style, children }) => {
  const textStyle = {
    color: styles.color,
    ...styles[variant]
  }

  return (
    <Text style={[textStyle, style]} maxFontSizeMultiplier={1}>
      {children}
    </Text>
  )
}

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'title',
    'caption',
    'subheading',
  ]),
  children: PropTypes.any,
  style: PropTypes.any
}

Typography.defaultProps = {
  variant: 'subheading',
  style: {},
  children: ''
}

export default Typography
