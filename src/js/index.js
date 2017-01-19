require('../less/styles.less');

import React from 'react'
import { render } from 'react-dom'

import * as Store from './app/store'
import Root from './components/Root'
import interaction from './__mocks__/interaction'

let store = Store.configure({
  simulate: interaction
});

// let store = Store.configure();

render(
  <Root store={store} />,
  document.getElementById('app')
)
