import { connect } from 'react-redux'
import { fetchArticles, getArticles } from '../../redux/modules/articles'
import { setRange } from '../../redux/modules/range'
import Articles from './Articles'

const mapStateToProps = state => ({
  articles: getArticles(state),
  range: state.range
})

const mapDispatchToProps = { fetchArticles, setRange }

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
