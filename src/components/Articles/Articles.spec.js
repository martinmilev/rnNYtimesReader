import React from 'react'
import { render } from 'react-native-testing-library'
import Articles from './Articles'
import ArticleRow from './ArticleRow'

describe('(Articles) is rendering', () => {
  it('should set date range when mounted', () => {
    const onEventMock = jest.fn()
    render(
      <Articles
        range={'1'}
        articles={[]}
        setRange={onEventMock}
        isFetching={false}
      />
    )
    expect(onEventMock).toHaveBeenCalledWith('1')
  })
})

describe('(ArticleRow) is rendering', () => {
  it('should render article', () => {
    const { getAllByType } = render(
      <ArticleRow
        range={'1'}
        item={{
          title: 'Most Viewed Article',
          published_date: '21.21.2121',
          media: { thumbnail: { height: 10, width: 10, source: '' } }
        }}
        fetchArticles={() => {}}
      />
    )
    const text = getAllByType('Text')
    expect(text[0].props.children).toEqual('Most Viewed Article')
  })
})
