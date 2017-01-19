import React from 'react';
import { Provider } from 'react-redux'

import DBO_Dashboard from '../containers/dbo-dashboard'

const Root = ({ store }) => (
  <Provider store={store}>
    <DBO_Dashboard />
  </Provider>
);

export default Root;
