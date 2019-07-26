import React, {Fragment} from 'react'
import { Text, StatusBar } from 'react-native'

const App = () => (
  <Fragment>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    <Text
      style={{
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
      }}
    >
      RN New York Times Reader
    </Text>
  </Fragment>
)

export default App
