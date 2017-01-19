import items from '../items'
import { ACTIONS } from '../../actions/constants'

describe('items reducer', () => {

  it('should handle initial state', () => {
    expect(
      items(undefined, {})
    ).toEqual({
      byId: {},
      allIds: [],
      isFetching: false
    })
  })

  it('should handle receiving a list of items', () => {
    expect(
      items(undefined, {
        type: ACTIONS.FETCH_ITEMS_SUCCESS,
        payload: {
          response: {
            result: [1, 2],
            entities: {
              items: {
                1: {
                  id: 1,
                  type: 'firewall',
                  name: 'item-name-1',
                  owner: 'ostone',
                  timeStarted: 1482258431277,
                  metric_result: null,
                  build_result: null,
                  unit_tests_result: null,
                  functional_tests_result: null
                },
                2: {
                  id: 2,
                  type: 'build',
                  name: 'item-name-2',
                  owner: 'wallen',
                  timeStarted: 1482258989678,
                  metric_result: null,
                  build_result: null,
                  unit_tests_result: null,
                  functional_tests_result: null
                }
              }
            }
          }
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          type: 'firewall',
          name: 'item-name-1',
          owner: 'ostone',
          timeStarted: 1482258431277,
          metric_result: null,
          build_result: null,
          unit_tests_result: null,
          functional_tests_result: null
        },
        2: {
          id: 2,
          type: 'build',
          name: 'item-name-2',
          owner: 'wallen',
          timeStarted: 1482258989678,
          metric_result: null,
          build_result: null,
          unit_tests_result: null,
          functional_tests_result: null
        }
      },
      allIds: [1, 2],
      isFetching: false
    })
  })

  it('should handle adding an item', () => {
    expect(
      items({
        byId: {
          1: {
            id: 1,
          	type: 'firewall',
          	name: 'item-name-1',
          	owner: 'ostone',
          	timeStarted: 1482258431277,
          	metric_result: null,
          	build_result: null,
          	unit_tests_result: null,
          	functional_tests_result: null
          }
        },
        allIds: [1],
        isFetching: false
      }, {
        type: ACTIONS.ADD_DASHBOARD_ITEM,
        payload: {
          response: {
            result: 2,
            entities: {
              items: {
                2: {
                  id: 2,
                	type: 'build',
                	name: 'item-name-2',
                	owner: 'wallen',
                	timeStarted: 1482258989678,
                	metric_result: null,
                	build_result: null,
                	unit_tests_result: null,
                	functional_tests_result: null
                }
              }
            }
          }
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          type: 'firewall',
          name: 'item-name-1',
          owner: 'ostone',
          timeStarted: 1482258431277,
          metric_result: null,
          build_result: null,
          unit_tests_result: null,
          functional_tests_result: null
        },
        2: {
          id: 2,
          type: 'build',
          name: 'item-name-2',
          owner: 'wallen',
          timeStarted: 1482258989678,
          metric_result: null,
          build_result: null,
          unit_tests_result: null,
          functional_tests_result: null
        }
      },
      allIds: [1, 2],
      isFetching: false
    })
  })

  it('should handle updating an item', () => {
    expect(
      items({
        byId: {
          1: {
            id: 1,
          	type: 'firewall',
          	name: 'item-name-1',
          	owner: 'ostone',
          	timeStarted: 1482258431277,
            status: 'pending',
            statusText: '',
            statusCTA: '',
          	metric_result: null,
          	build_result: null,
          	unit_tests_result: null,
          	functional_tests_result: null
          }
        },
        allIds: [1],
        isFetching: false
      }, {
        type: ACTIONS.UPDATE_DASHBOARD_ITEM,
        payload: {
          response: {
            result: 1,
            entities: {
              items: {
                1: {
                  id: 1,
                	metric_result: 1,
                	build_result: 2,
                	unit_tests_result: 3,
                	functional_tests_result: null
                }
              }
            }
          }
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          type: 'firewall',
          name: 'item-name-1',
          owner: 'ostone',
          timeStarted: 1482258431277,
          status: 'pending',
          statusText: '',
          statusCTA: '',
          metric_result: 1,
          build_result: 2,
          unit_tests_result: 3,
          functional_tests_result: null
        }
      },
      allIds: [1],
      isFetching: false
    })
  })

  it('should set the isFetching flag on "request items" action', () => {
    expect(
      items({
        byId: {},
        allIds: [],
        isFetching: false
      }, {
        type: ACTIONS.FETCH_ITEMS_REQUEST
      })
    ).toEqual({
      byId: {},
      allIds: [],
      isFetching: true
    })
  })

  it('should unset the isFetching flag on "receive todos" action', () => {
    expect(
      items({
        byId: {},
        allIds: [],
        isFetching: true
      }, {
        type: ACTIONS.FETCH_ITEMS_SUCCESS,
        payload: {
          response: {
            result: [],
            entities: {
              items: {}
            }
          }
        }
      })
    ).toEqual({
      byId: {},
      allIds: [],
      isFetching: false
    })
  })

})
