import {
  normalize
} from 'normalizr'

import * as api from '../api/index'
import * as schema from './schema'
import {
  ACTIONS
} from './constants'

export const fetchItems = () => (dispatch) => {

  dispatch({
    type: ACTIONS.FETCH_ITEMS_REQUEST
  });

  return api.fetchItems().then(response => {
      dispatch({
        type: ACTIONS.FETCH_ITEMS_SUCCESS,
        payload: {
          response: normalize(response, schema.array_item)
        }
      });
    },
    error => {
      dispatch({
        type: ACTIONS.FETCH_ITEMS_ERROR,
        payload: {
          message: 'fetch dashboard items failed'
        }
      })
    });
}

export const addDashboardItem = (item) => ({
  type: ACTIONS.ADD_DASHBOARD_ITEM,
  payload: {
    response: normalize(item, schema.item)
  }
})

export const updateDashboardItem = (item) => ({
  type: ACTIONS.UPDATE_DASHBOARD_ITEM,
  payload: {
    response: normalize(item, schema.item)
  }
})

export const expandDashboardItem = (itemId) => ({
  type: ACTIONS.EXPAND_DASHBOARD_ITEM,
  payload: {
    id: itemId  
  }
})
