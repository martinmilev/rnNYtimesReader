import { connect } from 'react-redux'
import { getArticleById } from '../../redux/modules/articles'
import Article from './Article'

const mapStateToProps = (state, ownProps) => ({
  article: getArticleById(state, ownProps.match.params.id)
})

export default connect(mapStateToProps)(Article)
