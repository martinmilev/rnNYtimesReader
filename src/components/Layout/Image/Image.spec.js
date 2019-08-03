import React from 'react'
import { render } from 'react-native-testing-library'
import Image from './Image'

describe('(Image) is rendering', () => {
  it('should render image', () => {
    const { getByType } = render(
      <Image image={{ source: '/test', width: 10, height: 10 }} />
    )
    const image = getByType('Image')
    expect(image.props.source).toEqual({ uri: '/test' })
    expect(image.props.style.height).toEqual(10)
    expect(image.props.style.width).toEqual(10)
  })

  it('should resize image', () => {
    const { getByType } = render(
      <Image image={{ source: '/test', width: 1000, height: 1000 }} />
    )
    const image = getByType('Image')
    expect(image.props.source).toEqual({ uri: '/test' })
    expect(image.props.style.height).toEqual(730)
    expect(image.props.style.width).toEqual(730)
  })
})
