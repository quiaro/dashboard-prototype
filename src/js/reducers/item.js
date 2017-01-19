import { ACTIONS } from '../actions/constants'

const item = (state, action) => {
  let response;
  let item;

  switch (action.type) {
    case ACTIONS.ADD_DASHBOARD_ITEM:
      response = action.payload.response;
      item = response.entities.items[response.result];
      return {
        id: item.id,
        type: item.type,
        name: item.name,
        owner: item.owner,
        timeStarted: item.timeStarted,
        status: item.status,
        statusText: item.statusText,
        statusCTA: item.statusCTA,
        metric_result: item.metric_result,
        build_result: item.build_result,
        unit_test_result: item.unit_test_result,
        functional_test_result: item.functional_test_result
      };
    case ACTIONS.UPDATE_DASHBOARD_ITEM:
      response = action.payload.response;
      item = response.entities.items[response.result]
      return {
        ...state,
        status: item.status || state.status,
        statusText: item.statusText || '',
        statusCTA: item.statusCTA || '',
        metric_result: item.metric_result || state.metric_result,
        build_result: item.build_result || state.build_result,
        unit_test_result: item.unit_test_result || state.unit_test_result,
        functional_test_result: item.functional_test_result || state.functional_test_result
      };
    default:
      return state;
  }
};

export default item;
