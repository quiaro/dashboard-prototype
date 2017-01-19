import { ACTIONS } from '../actions/constants'

const metric = (state, action) => {
  let response;
  let id;
  let item;

  switch (action.type) {
    case ACTIONS.ADD_DASHBOARD_ITEM:
    case ACTIONS.UPDATE_DASHBOARD_ITEM:
      response = action.payload.response;
      id = response.entities.items[response.result].metric_result;
      item = response.entities.metric_results[id];

      if (id && item) {
        return {
          id: id,
      		status: item.status,
          progressPercentage: item.progressPercentage,
      		data: item.data
        };
      }
    default:
      return state;
  }
};

export default metric;
