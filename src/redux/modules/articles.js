export const FETCH_ARTICLES = '[articles] Fetch'
export const FETCH_ARTICLES_SUCCESS = '[articles] Fetch_SUCCESS'

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
  payload: {
    request: {
      method: 'get',
      url: '/mostpopular/v2/viewed/1'
    }
  }
})

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS: {
      return action.payload.data.results
    }
    default:
      return state
  }
}

export const articles = state => state.articles
