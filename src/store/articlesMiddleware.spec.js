import configureStore from 'redux-mock-store'
import { articlesMiddleware } from './articlesMiddleware'

const mockStore = configureStore(articlesMiddleware)

describe('Articles', () => {
  describe('processArticlesFetchFlow', () => {
    it('unknown action', () => {
      const store = mockStore({})

      store.dispatch({ type: 'ANYTHING' })

      expect(store.getActions()).toEqual([{ type: 'ANYTHING' }])
    })

    //TBD
  })
})