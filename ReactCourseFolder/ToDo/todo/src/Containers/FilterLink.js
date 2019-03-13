import { connect } from 'react-redux'
import { SET_VISIBILITY_FILTER } from '../ActionTypes'
import Link from '../components/Link'
import { setVisibilityFilter } from '../reducers'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter == state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
