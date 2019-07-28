import React from 'react'
import { render } from 'react-native-testing-library'
import Articles from './Articles'
import ArticleRow from './ArticleRow'

describe('(Articles) is rendering', () => {
  it('should render activity indicator when articles array is empty', () => {
    const { getAllByType } = render(
      <Articles
        articles={[]}
        fetchArticles={() => {}}
      />
    )
    const indicator = getAllByType('ActivityIndicator')
    expect(indicator.length).toEqual(1)
  })

  it('should fetch articles when mounted', () => {
    const fetchArticles = jest.fn()
    const { getAllByType } = render(
      <Articles
        articles={[]}
        fetchArticles={fetchArticles}
      />
    )
    expect(fetchArticles).toHaveBeenCalled()
  })
})

describe('(ArticleRow) is rendering', () => {
  it('should render article', () => {
    const { getAllByType } = render(
      <ArticleRow
        item={{
          title: 'Most Viewed Article',
          abstract: 'Some abstraction',
          published_date: '21.21.2121'
        }}
        fetchArticles={() => {}}
      />
    )
    const text = getAllByType('Text')
    expect(text[0].props.children).toEqual('Most Viewed Article')
    expect(text[1].props.children).toEqual('Some abstraction')
    expect(text[2].props.children).toEqual('21.21.2121')
  })
})
