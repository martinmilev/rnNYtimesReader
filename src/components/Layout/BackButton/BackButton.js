import React, { Component } from 'react'
import { TouchableOpacity, BackHandler, View } from 'react-native'
import { Typography } from '../'
import PropTypes from 'prop-types'

class BackButton extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress = () => {
    this.goBack()
    return true
  }

  goBack() {
    const { history } = this.props
    if (history.location.pathname !== '/') {
      history.goBack()
      return true
    }
    BackHandler.exitApp()
    return false
  }

  render() {
    if (this.props.history.location.pathname == '/') {
      return <View flex={0.1} />
    }

    return (
      <TouchableOpacity
        style={{ width: 40 }}
        onPress={this.handleBackPress}
        testID="button"
      >
        <Typography variant={'icon'}>{"<"}</Typography>
      </TouchableOpacity>
    )
  }
}

BackButton.propTypes = {
  history: PropTypes.object.isRequired
}

export default BackButton
