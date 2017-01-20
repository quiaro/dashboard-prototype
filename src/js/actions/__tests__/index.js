import { ACTIONS } from '../constants'
import * as actions from '../index'

describe('actions', () => {

  test('async action creator "fetchItems" emits two actions', () => {
    const dispatchMock = jest.fn();

    return actions.fetchItems()(dispatchMock).then(response => {

      // First action
      expect(dispatchMock.mock.calls[0][0].type).toEqual(ACTIONS.FETCH_ITEMS_REQUEST);

      // Second action (after async operation)
      expect(dispatchMock.mock.calls[1][0].type).toEqual(ACTIONS.FETCH_ITEMS_SUCCESS);
      expect(dispatchMock.mock.calls[1][0].payload).toEqual({
        response: {
          result: [1],
          entities: {
            items: {
              1: {
                id: 1,
                name: 'item-name-1',
                owner: 'ostone',
                timeStarted: 1482258431277,
                status: 'success',
                statusText: 'Task Complete',
                statusCTA: 'View details',
                metric_result: 10,
                build_result: 20,
                unit_test_result: 30,
                functional_test_result: 40
              }
            },
            metric_results: {
              10: {
                id: 10,
                status: 'success',
                progressPercentage: 100,
                data: [
                  {
                    label: 'Metric 1',
                    value: 64,
                    result: 'success'
                  },
                  {
                    label: 'Metric 2',
                    value: 53,
                    result: 'fail'
                  },
                  {
                    label: 'Metric 3',
                    value: 64,
                    result: 'ambivalent'
                  },
                  {
                    label: 'Metric 4',
                    value: 72,
                    result: 'ambivalent'
                  }
                ]
              }
            },
            build_results: {
              20: {
                id: 20,
                status: 'success',
                progressPercentage: 100,
                timeFinished: 1482258989678
              }
            },
            unit_test_results: {
              30: {
                id: 30,
                status: 'success',
                progressPercentage: 100,
                totalTests: 152,
                testsPassed: 138,
                coveragePercentage: 76
              }
            },
            functional_test_results: {
              40: {
                id: 40,
                status: 'success',
                progressPercentage: 100,
                totalTests: 6466,
                testsPassed: 4321,
                coveragePercentage: 23
              }
            }
          }
        }
      });
    })
  })

  test('async action creator "fetchItems" dispatches an error action if fetching fails', () => {
    const api = require('../api/index');
    // Mock API call so that it throws an error
    api.fetchItems = () => new Promise((resolve, reject) => reject('Fetching items failed'));

    const dispatchMock = jest.fn();

    return actions.fetchItems('completed')(dispatchMock).then(() => {
      // First action
      expect(dispatchMock.mock.calls[0][0].type).toEqual(ACTIONS.FETCH_ITEMS_REQUEST);

      // Second action
      expect(dispatchMock.mock.calls[1][0].type).toEqual(ACTIONS.FETCH_ITEMS_ERROR);
    })
  })

  it('should create an "add dashboard item" action', () => {
    let addAction = actions.addDashboardItem({
      id: 1,
      name: 'item-name-1',
      owner: 'ostone',
      timeStarted: 1482258431277,
      status: 'success',
      statusText: 'Task Complete',
      statusCTA: 'View details',
      metric_result: null,
      build_result: null,
      unit_test_result: null,
      functional_test_result: {
        id: 40,
    		status: 'success',
        progressPercentage: 100,
    		totalTests: 6466,
    		testsPassed: 4321,
    		coveragePercentage: 23
      }
    });
    expect(addAction).toEqual({
      type: ACTIONS.ADD_DASHBOARD_ITEM,
      payload: {
        response: {
          result: 1,
          entities: {
            items: {
              1: {
                id: 1,
                name: 'item-name-1',
                owner: 'ostone',
                timeStarted: 1482258431277,
                status: 'success',
                statusText: 'Task Complete',
                statusCTA: 'View details',
                metric_result: null,
                build_result: null,
                unit_test_result: null,
                functional_test_result: 40,
              }
            },
            functional_test_results: {
              40: {
                id: 40,
            		status: 'success',
                progressPercentage: 100,
            		totalTests: 6466,
            		testsPassed: 4321,
            		coveragePercentage: 23
              }
            }
          }
        }
      }
    })
  })

  it('should create an "update dashboard item" action', () => {
    let updateAction = actions.updateDashboardItem({
      id: 2,
      status: 'success',
      statusText: 'Task Complete',
      statusCTA: 'View details',
      metric_result: null,
      build_result: {
        id: 20,
        status: 'success',
        progressPercentage: 100,
        timeFinished: 1482258989678
      },
      unit_test_result: null,
      functional_test_result: {
        id: 40,
    		status: 'success',
        progressPercentage: 100,
    		totalTests: 6466,
    		testsPassed: 4321,
    		coveragePercentage: 23
      }
    });
    expect(updateAction).toEqual({
      type: ACTIONS.UPDATE_DASHBOARD_ITEM,
      payload: {
        response: {
          result: 2,
          entities: {
            items: {
              2: {
                id: 2,
                status: 'success',
                statusText: 'Task Complete',
                statusCTA: 'View details',
                metric_result: null,
                build_result: 20,
                unit_test_result: null,
                functional_test_result: 40,
              }
            },
            build_results: {
              20: {
                id: 20,
                status: 'success',
                progressPercentage: 100,
                timeFinished: 1482258989678
              }
            },
            functional_test_results: {
              40: {
                id: 40,
            		status: 'success',
                progressPercentage: 100,
            		totalTests: 6466,
            		testsPassed: 4321,
            		coveragePercentage: 23
              }
            }
          }
        }
      }
    })
  })

  it('should create an "expand dashboard item" action', () => {
    let expandAction = actions.expandDashboardItem(12);
    expect(expandAction).toEqual({
      type: ACTIONS.EXPAND_DASHBOARD_ITEM,
      payload: {
        id: 12
      }
    });
  })

})
