import configureStore from 'redux-mock-store'
import { SET_ARTICLES, FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS } from '../redux/modules/articles'
import { setRange, SET_RANGE } from '../redux/modules/range'
import { articlesMiddleware, processArticleMedia } from './articlesMiddleware'

const mockStore = configureStore(articlesMiddleware)

describe('Articles', () => {
  it('unknown action', () => {
    const store = mockStore({})
    store.dispatch({ type: 'ANYTHING' })
    expect(store.getActions()).toEqual([{ type: 'ANYTHING' }])
  })

  describe('rangeChangeFlow', () => {
    it('should fetch articles on range change', () => {
      const store = mockStore({})
      
      store.dispatch(setRange(11))

      const actions = store.getActions()

      expect(actions.length).toEqual(2)
      expect(actions[0]).toEqual({
        type: SET_RANGE,
        range: 11
      })
      expect(actions[1]).toEqual({
        type: FETCH_ARTICLES,
        payload: { 
          request: {
            method: 'get',
            url: '/mostpopular/v2/viewed/11',
          }
        }
      })
    })
  })

  describe('processArticlesFetchFlow', () => {
    it('should not set articles on fetch success with no results', () => {
      const store = mockStore({})
      store.dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: { data: { results: [] } }
      })

      const actions = store.getActions()

      expect(actions.length).toEqual(1)
    })

    it('should set articles on fetch success with results', () => {
      const store = mockStore({})
      store.dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: {
          data: {
            results: [{
              id: 1,
              title: 'Article 1',
              abstract: 'Any',
              published_date: '21-03-2019',
              byline: 'by John Doe',
              media: [{ 'media-metadata': [] }]
            }]
          }
        }
      })

      const actions = store.getActions()

      expect(actions.length).toEqual(2)
      expect(actions[1]).toEqual({
        type: SET_ARTICLES,
        articles: [{
          id: 1,
          title: 'Article 1',
          abstract: 'Any',
          publishedOn: '21-03-2019',
          byline: 'by John Doe',
          media: { image: {}, thumbnail: {} }
        }]
      })
    })
  })

  describe('processArticleMedia', () => {
    it('should return image and thumbnail', () => {
      expect(processArticleMedia([])).toEqual({ image: {}, thumbnail: {} })
    })

    it('should process media and return image and thumbnail', () => {
      expect(processArticleMedia([{
        'media-metadata': [{
           format: 'Standard Thumbnail',
           width: 10,
           height: 10,
           url: '/thumbnail'
         }, {
           format: 'mediumThreeByTwo440',
           width: 100,
           height: 100,
           url: '/image'
         }
        ]
      }]
      ))
        .toEqual({
          image: {
            source: '/image',
            width: 100,
            height: 100,
          },
          thumbnail: {
            source: '/thumbnail',
            width: 10,
            height: 10,
          }
        })
    })
  })
})
