import React, { Fragment,  useState, useEffect } from 'react'
import { Text, StatusBar } from 'react-native'
import Config from 'react-native-config'

const App = () => {
    const [articles, setArticles] = useState(0)

  useEffect(() => { 
    let mounted = false

    if (!mounted) {
      fetch(
        `${Config.API_URL}/mostpopular/v2/viewed/1.json?api-key=${Config.API_KEY}`
      )
      .then(response => response.json())
      .then(json => setArticles(json.results))
      .catch((error) => console.error(error))
      mounted = true
    }
  }, [])


  return (
  <Fragment>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    <Text style={{ fontSize: 24, alignSelf: 'center' }}>
      RN New York Times Reader
    </Text>
    {articles == 0 ? (
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>
        Loading...
      </Text>
    ) : (
        {articles.map((article, index) => (
            <Text key={index}>{index + 1}: {article.title}</Text>
          )
        )}
    )}
  </Fragment>
)
}

export default App
