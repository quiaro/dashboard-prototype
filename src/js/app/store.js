import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

import { serverDelay } from '../common/utils'
import { appLoadTime } from '../common/config'

export const configure = (opts = {}) => {
  const simulate = opts.simulate || {};
  const middlewares = [ thunk ];

  middlewares.push(createLogger());

  const store = createStore(reducers, {}, applyMiddleware(...middlewares));

  if (simulate.actions && simulate.actions.length) {
    const actions = simulate.actions;
    const lapse = simulate.lapse || 500;  // half a second lapse by default
    let delay = appLoadTime;

    while(actions.length) {
      let action = actions.shift();
      delay += lapse;

      serverDelay(delay).then(() => {
        store.dispatch(action);
      })
    }
  }

  return store;
}
