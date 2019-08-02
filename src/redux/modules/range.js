export const SET_RANGE = '[range] Set'

export const setRange = range => {
  return { type: SET_RANGE, range }
}

export default (state = 1, action) => {
  switch (action.type) {
    case SET_RANGE: {
      return action.range
    }
    default:
      return state
  }
}
