import React from 'react'
import { render } from 'react-native-testing-library'
import Articles from './Articles'

describe('(Articles) is rendering', () => {
  it('should render articles when articles array is empty', () => {
    const { getAllByType } = render(
      <Articles
        articles={[
          { title: 'Most Viewed Article' },
          { title: 'Second Most Viewew' }
        ]}
        fetchArticles={() => {}}
      />
    )
    const text = getAllByType('Text')
    expect(text[0].props.children).toEqual([1, ": ", "Most Viewed Article"])
    expect(text[1].props.children).toEqual([2, ": ", "Second Most Viewew"])
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
