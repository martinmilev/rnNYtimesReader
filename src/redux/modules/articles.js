import { combineReducers } from 'redux'

export const FETCH_ARTICLES = '[articles] Fetch'
export const FETCH_ARTICLES_SUCCESS = '[articles] Fetch_SUCCESS'
export const FETCH_ARTICLES_FAIL = '[articles] Fetch_FAIL'
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

export const list = (state = [], action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      return action.articles
    }
    default:
      return state
  }
}

export const fetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_ARTICLES: {
      return true
    }
    case FETCH_ARTICLES_SUCCESS: {
      return false
    }
    case FETCH_ARTICLES_FAIL: {
      return false
    }
    default:
      return state
  }
}


export default combineReducers({ list, fetching })

export const isFetching = state => state.articles.fetching
export const getArticles = state => state.articles.list
export const getArticleById = (state, id) =>
  getArticles(state).find(article => article.id == id)
