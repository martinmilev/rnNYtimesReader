import
  reduce,
  { FETCH_ARTICLES_SUCCESS, fetchArticles, articles }
from './articles'

describe('(Articles)', () => {
  describe('Reducer', () => {
    it('unknown action', () => {
      const state = reduce({ test: 0 }, { type: 'UNKNOWN' })
      expect(state.test).toBe(0)
    })

    it('Articles updated on success', () => {
      const state = reduce([], {
        type: FETCH_ARTICLES_SUCCESS,
        payload: { data: { results: [1,2,3] } }
      })
      expect(state).toEqual([1,2,3])
    })
  })

  describe('Selectors', () => {
    describe('articles', () => {
      it('should get articles', () => {
        const state = { articles: [1,2,3,4,5] }
        expect(articles(state)).toEqual([1,2,3,4,5])
      })
    })
  })
})
