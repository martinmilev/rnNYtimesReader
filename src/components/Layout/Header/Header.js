import React from 'react'
import { View } from 'react-native'
import { Row, Typography } from '../'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <Row style={{ padding: 5 }}>
    <View flex={0.1} />
    <Typography variant={'header'} align={'center'} testID="title">
      {title}
    </Typography>
    <View flex={0.1} />
  </Row>
)

Header.propTypes = { title: PropTypes.string.isRequired }

export default Header
