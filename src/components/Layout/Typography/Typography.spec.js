import React from 'react'
import Typography from './Typography'
import { render } from 'react-native-testing-library'

describe('(Typography) Component', () => {
  describe('is rendering', () => {
    it('child content', () => {
      const { queryByText } = render(<Typography>text</Typography>)
      expect(queryByText('text')).toBeTruthy()
    })
  })
})
