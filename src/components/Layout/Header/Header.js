import React from 'react'
import { View } from 'react-native'
import { Row, Typography, BackButton } from '../'
import PropTypes from 'prop-types'

const Header = ({ title, history }) => (
  <Row style={{ padding: 10 }}>
    <BackButton history={history} />
    <Typography variant={'header'} align={'center'} testID="title">
      {title}
    </Typography>
    <View flex={0.1} />
  </Row>
)

Header.propTypes = { title: PropTypes.string.isRequired }

export default Header
