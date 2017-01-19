import * as Store from '../store'

describe('App Store', () => {

  it('should return a store with the initial default state for the app', () => {
    let store = Store.configure();
    expect(store.getState()).toEqual({
      expanded: null,
      items: {
        byId: {},
        allIds: [],
        isFetching: false
      },
      metrics: {
        byId: {},
        allIds: []
      },
      builds: {
        byId: {},
        allIds: []
      },
      unitTestResults: {
        byId: {},
        allIds: []
      },
      functionalTestResults: {
        byId: {},
        allIds: []
      }
    })
  })

})
