import reduce, { SET_ARTICLES, getArticles, getArticleById }
  from './articles'

describe('(Articles)', () => {
  describe('Reducer', () => {
    it('unknown action', () => {
      const state = reduce({ test: 0 }, { type: 'UNKNOWN' })
      expect(state.test).toBe(0)
    })

    it('Articles updated on SET_ARTICLES', () => {
      const state = reduce([], {
        type: SET_ARTICLES,
        articles: [1, 2, 3]
      })
      expect(state).toEqual([1, 2, 3])
    })
  })

  describe('Selectors', () => {
    describe('articles', () => {
      it('should get articles', () => {
        const state = { articles: [1, 2, 3, 4, 5] }
        expect(getArticles(state)).toEqual([1, 2, 3, 4, 5])
      })

      describe('articleById', () => {
        it('should get article by id', () => {
          const state = { articles: [{ id: 1 }, { id: 2 }, { id: 3 }] }
          expect(getArticleById(state, 2)).toEqual({ id: 2 })
        })
      })
    })
  })
})
