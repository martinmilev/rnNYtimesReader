export const FETCH_ARTICLES = '[articles] Fetch'
export const FETCH_ARTICLES_SUCCESS = '[articles] Fetch_SUCCESS'
export const SET_ARTICLES = '[articles] Set'

export const fetchArticles = range => ({
  type: FETCH_ARTICLES,
  payload: {
    request: {
      method: 'get',
      url: `/mostpopular/v2/viewed/${range}`
    }
  }
})

export const setArticles = articles => {
  return { type: SET_ARTICLES, articles }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      return action.articles
    }
    default:
      return state
  }
}

export const articles = state => state.articles
export const articleById = (state, id) =>
  state.articles.find(article => article.id == id)

