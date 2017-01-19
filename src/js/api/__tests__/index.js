import * as API from '../index'

describe('API', () => {

  jest.useFakeTimers();

  it('should return all items', () => {
    const promise = API.fetchItems();
    jest.runAllTimers();
    return promise.then(items => {
      expect(items.length).toEqual(3);
    });
  })
})
