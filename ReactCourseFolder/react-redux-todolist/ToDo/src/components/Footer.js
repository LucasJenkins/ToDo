import React from 'react'
import FilterLink from '../Containers/FilterLink'
import { VISIBILITY_FILTERS } from '../ActionTypes'

const Footer = () => (
  <p>
    Show: <FilterLink filter={VISIBILITY_FILTERS.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VISIBILITY_FILTERS.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
