import { connect } from 'react-redux'
import { fetchArticles, articles } from '../../redux/modules/articles'
import { setRange } from '../../redux/modules/range'
import Articles from './Articles'

const mapStateToProps = state => ({
  articles: articles(state),
  range: state.range
})

const mapDispatchToProps = { fetchArticles, setRange }

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
