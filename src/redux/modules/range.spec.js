import reduce, { SET_RANGE } from './range'

describe('(Range)', () => {
  describe('Reducer', () => {
    it('unknown action', () => {
      const state = reduce({ test: 0 }, { type: 'UNKNOWN' })
      expect(state.test).toBe(0)
    })

    it('Range updated on SET_RANGE', () => {
      const state = reduce([], {
        type: SET_RANGE,
        range: '3'
      })
      expect(state).toEqual('3')
    })
  })
})
