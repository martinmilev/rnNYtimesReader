import React from 'react'
import { Image as RNImage } from 'react-native'
import PropTypes from 'prop-types'

const Image = ({ image }) => (
  <RNImage
    style={{ width: image.width, height: image.height }}
    source={{ uri: image.source }}
  />
)

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