import React from 'react'
import { Image as RNImage, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const Image = ({ image }) => {
  let { width, height } = image

  if (width > screenWidth) {
    width = screenWidth - 20
    height = image.height - (image.height - width)
  }
  
  return (
    <RNImage
      style={{ width, height }}
      source={{ uri: image.source }}
    />
  )
}

Image.propTypes = {
  image: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired
}

Image.defaultProps = {
  image: { source: '', height: 0, width: 0, }
}

export default Image
