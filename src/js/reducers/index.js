import { combineReducers } from 'redux'
import expanded from './expanded'
import items, * as itemSelectors from './items'
import createList, * as listSelectors from './createList'

export const getExpanded = (state) => {
  return state.expanded;
}

export const getAllItems = (state) => {
  return itemSelectors.getAllItems(state.items)
}

export const getAllMetrics = (state) => {
  return listSelectors.getAll(state.metrics)
}

export const getAllUnitTestResults = (state) => {
  return listSelectors.getAll(state.unitTestResults)
}

export const getAllFunctionalTestResults = (state) => {
  return listSelectors.getAll(state.functionalTestResults)
}

export const getIsFetching = (state) => {
  return itemSelectors.getIsFetching(state.items)
}

const dashboardApp = combineReducers({
  expanded,
  items,
  metrics: createList('metric_result'),
  unitTestResults: createList('unit_test_result'),
  functionalTestResults: createList('functional_test_result')
})

export default dashboardApp
