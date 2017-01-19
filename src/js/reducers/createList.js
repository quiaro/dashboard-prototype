import { combineReducers } from 'redux'
import { ACTIONS } from '../actions/constants'

import metric from './metric'
import build from './build'
import unitTestResult from './unitTestResult'
import functionalTestResult from './functionalTestResult'

/*
 * ----- SELECTORS
 */
export const getAll = (state) => state.byId;

/*
 * ----- REDUCERS
 */
const createList = (type) => {

  const constructorMap = {
    'metric_result':          metric,
    'build_result':           build,
    'unit_test_result':       unitTestResult,
    'functional_test_result': functionalTestResult
  }

  const byId = (state = {}, action) => {
    let response;
    let id;

    switch (action.type) {
      case ACTIONS.FETCH_ITEMS_SUCCESS:
        return action.payload.response.entities[type + 's'];
      case ACTIONS.ADD_DASHBOARD_ITEM:
      case ACTIONS.UPDATE_DASHBOARD_ITEM:
        response = action.payload.response;
        id = response.entities.items[response.result][type];

        if (id) {
          return {
            ...state,
            [id] : constructorMap[type](state[id], action)
          }
        }
      default:
        return state;
    }
  }

  const allIds = (state = [], action) => {
    let response;
    let id;

    switch (action.type) {
      case ACTIONS.FETCH_ITEMS_SUCCESS:
        return Object.keys(action.payload.response.entities[type + 's']);
      case ACTIONS.ADD_DASHBOARD_ITEM:
      case ACTIONS.UPDATE_DASHBOARD_ITEM:
        response = action.payload.response;
        id = response.entities.items[response.result][type];

        if (id && state.indexOf(id) == -1) {
          return [...state, id];
        }
      default:
        return state;
    }
  }

  return combineReducers({
    byId,
    allIds
  })
}

export default createList;
