import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Typography = ({ variant, align, style, children }) => {
  const textStyle = {
    flex: 1,
    color: styles.color,
    textAlign: align,
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
    'header',
    'title',
    'caption',
    'subheading',
    'icon'
  ]),
  align: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  children: PropTypes.any,
  style: PropTypes.any
}

Typography.defaultProps = {
  variant: 'subheading',
  style: {},
  children: ''
}

export default Typography
