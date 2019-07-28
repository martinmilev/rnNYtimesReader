import { connect } from 'react-redux'
import { fetchArticles, articles } from '../../redux/modules/articles'
import Articles from './Articles'

const mapStateToProps = state => ({ articles: articles(state) })

const mapDispatchToProps = { fetchArticles }

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
