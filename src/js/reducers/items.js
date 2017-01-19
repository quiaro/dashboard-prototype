import { combineReducers } from 'redux';
import { ACTIONS } from '../actions/constants';
import item from './item';

/*
 * ----- SELECTORS
 */
export const getAllItems = (state) => state.allIds.map(id => state.byId[id]);

export const getIsFetching = (state) => state.isFetching;

/*
 * ----- REDUCERS
 */
const byId = (state = {}, action) => {

  switch (action.type) {
    case ACTIONS.FETCH_ITEMS_SUCCESS:
      return action.payload.response.entities.items;
    case ACTIONS.ADD_DASHBOARD_ITEM:
    case ACTIONS.UPDATE_DASHBOARD_ITEM:
      return {
        ...state,
        [action.payload.response.result] : item(state[action.payload.response.result], action)
      }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ITEMS_SUCCESS:
      return action.payload.response.result;
    case ACTIONS.ADD_DASHBOARD_ITEM:
      return [...state, action.payload.response.result];
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ITEMS_REQUEST:
      return true;
    case ACTIONS.FETCH_ITEMS_ERROR:
    case ACTIONS.FETCH_ITEMS_SUCCESS:
      return false;
    default:
      return state;
  }
}

const items = combineReducers({
  byId,
  allIds,
  isFetching
});

export default items
