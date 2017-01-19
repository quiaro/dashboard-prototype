import { ACTIONS } from '../actions/constants'

const unitTestResult = (state, action) => {
  let response;
  let id;
  let item;

  switch (action.type) {
    case ACTIONS.ADD_DASHBOARD_ITEM:
    case ACTIONS.UPDATE_DASHBOARD_ITEM:
      response = action.payload.response;
      id = response.entities.items[response.result].unit_test_result;
      item = response.entities.unit_test_results[id];

      if (id && item) {
        return {
          id: id,
      		status: item.status,
          progressPercentage: item.progressPercentage,
      		totalTests: item.totalTests,
      		testsPassed: item.testsPassed,
      		coveragePercentage: item.coveragePercentage
        };
      }
    default:
      return state;
  }
};

export default unitTestResult;
