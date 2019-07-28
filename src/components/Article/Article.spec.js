import React from 'react'
import { render } from 'react-native-testing-library'
import Article from './Article'

describe('(Article) is rendering', () => {
  it('should render article', () => {
    const { getAllByType } = render(
      <Article
        article={{
          title: 'Most Viewed Article',
          abstract: 'Some abstraction',
          published_date: '21.21.2121',
          byline: 'by John Doe'
        }}
      />
    )
    const text = getAllByType('Text')
    expect(text[0].props.children).toEqual('Most Viewed Article')
    expect(text[1].props.children).toEqual('by John Doe')
    expect(text[2].props.children).toEqual('21.21.2121')
    expect(text[3].props.children).toEqual('Some abstraction')
  })
})
