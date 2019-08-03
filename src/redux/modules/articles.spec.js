import reduce, {
  SET_ARTICLES,
  getArticles,
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  getArticleById
} from './articles'

describe('(Articles)', () => {
  describe('Reducer', () => {
    it('unknown action', () => {
      const state = reduce(undefined, { type: 'UNKNOWN' })
      expect(state).toEqual({ list: [], fetching: false })
    })

    it('updates articles list on SET_ARTICLES', () => {
      const state = reduce({}, {
        type: SET_ARTICLES,
        articles: [1, 2, 3]
      })
      expect(state.list).toEqual([1, 2, 3])
    })

    it('sets fetching to false on FETCH_ARTICLES', () => {
      const state = reduce({}, { type: FETCH_ARTICLES })
      expect(state.fetching).toEqual(true)
    })

    it('sets fetching to false on FETCH_ARTICLES_SUCCESS', () => {
      const state = reduce({}, { type: FETCH_ARTICLES_SUCCESS })
      expect(state.fetching).toEqual(false)
    })

    it('sets fetching to false on FETCH_ARTICLES_FAIL', () => {
      const state = reduce({}, { type: FETCH_ARTICLES_FAIL })
      expect(state.fetching).toEqual(false)
    })
  })

  describe('Selectors', () => {
    describe('articles', () => {
      it('should get articles', () => {
        const state = { articles: { list: [1, 2, 3, 4, 5] }}
        expect(getArticles(state)).toEqual([1, 2, 3, 4, 5])
      })

      describe('articleById', () => {
        it('should get article by id', () => {
          const state = { articles: { list: [{ id: 1 }, { id: 2 }, { id: 3 }]}}
          expect(getArticleById(state, 2)).toEqual({ id: 2 })
        })
      })
    })
  })
})
