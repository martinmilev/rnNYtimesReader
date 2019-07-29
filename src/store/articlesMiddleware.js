import { FETCH_ARTICLES_SUCCESS, setArticles } from '../redux/modules/articles'

const processArticlesFetchFlow = ({
  dispatch
}) => next => action => {
  next(action)
  if (action.type === FETCH_ARTICLES_SUCCESS) {
    const articles = action.payload.data.results
    if (articles.length > 0) {
      const result = articles.map(article => ({
        id: article.id,
        title: article.title,
        abstract: article.abstract,
        byline: article.byline,
        publishedOn: article.published_date,
        media: processArticleMedia(article.media)
      }))
      dispatch(setArticles(result))
    }
  }
}

const processArticleMedia = media => {
  const extracted = { thumbnail: {}, image: {} }
  if (media.length > 0) {
    media.map(item => {
      const metadata = item['media-metadata']
      if (metadata.length > 0) {
        metadata.map(data => {
          switch (data.format) {
            case "Standard Thumbnail": {
              extracted.thumbnail = {
                width: data.width,
                height: data.height,
                source: data.url
              }
            }
            case "mediumThreeByTwo440": {
              extracted.image = {
                width: 300,   //temporary values
                height: 300, //maximum size should be calculated
                source: data.url,
              }
            }
          }
        })
      }
    })
  }
  return extracted
}

export const articlesMiddleware = [processArticlesFetchFlow]
