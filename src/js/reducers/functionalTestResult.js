import { ACTIONS } from '../actions/constants'

const functionalTestResult = (state, action) => {
  let response;
  let id;
  let item;

  switch (action.type) {
    case ACTIONS.ADD_DASHBOARD_ITEM:
    case ACTIONS.UPDATE_DASHBOARD_ITEM:
      response = action.payload.response;
      id = response.entities.items[response.result].functional_test_result;
      item = response.entities.functional_test_results[id];

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

export default functionalTestResult;
