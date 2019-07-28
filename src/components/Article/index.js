import { connect } from 'react-redux'
import { articleById } from '../../redux/modules/articles'
import Article from './Article'

const mapStateToProps = (state, ownProps) => ({
  article: articleById(state, ownProps.match.params.id)
})

export default connect(mapStateToProps)(Article)
