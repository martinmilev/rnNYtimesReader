import React from 'react'
import { render } from 'react-native-testing-library'
import Articles from './Articles'
import ArticleRow from './ArticleRow'

describe('(Articles) is rendering', () => {
  it('should render articles when articles array is empty', () => {
    const { getAllByType } = render(
      <Articles
        articles={[{ title: 'Most Viewed Article' }]}
        fetchArticles={() => {}}
      />
    )
    const text = getAllByType('Text')
    expect(text[0].props.children).toEqual('Most Viewed Article')
  })

  it('should render Loading message when articles array is empty', () => {
    const { getAllByType } = render(
      <Articles
        articles={[]}
        fetchArticles={() => {}}
      />
    )
    const text = getAllByType('Text')
    expect(text[0].props.children).toEqual('Loading...')
  })

  it('should fetch articles when mounted', () => {
    const fetchArticles = jest.fn()
    const { getAllByType } = render(
      <Articles
        articles={[]}
        fetchArticles={fetchArticles}
      />
    )
    const text = getAllByType('Text')
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
