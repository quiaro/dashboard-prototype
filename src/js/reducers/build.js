import { ACTIONS } from '../actions/constants'

const build = (state, action) => {
  let response;
  let id;
  let item;

  switch (action.type) {
    case ACTIONS.ADD_DASHBOARD_ITEM:
    case ACTIONS.UPDATE_DASHBOARD_ITEM:
      response = action.payload.response;
      id = response.entities.items[response.result].build_result;
      item = response.entities.build_results[id];

      if (id && item) {
        return {
          id: id,
      		status: item.status,
          progressPercentage: item.progressPercentage,
      		timeFinished: item.timeFinished
        };
      }
    default:
      return state;
  }
};

export default build;
