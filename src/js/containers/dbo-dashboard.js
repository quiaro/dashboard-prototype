import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItems, expandDashboardItem } from '../actions';
import DBO_Loader from '../components/dbo-loader'
import DBO_Dashboard_Component from '../components/dbo-dashboard'
import * as selectors from '../reducers/index'

class DBO_Dashboard extends Component {

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return <DBO_Loader />
    }

    return <DBO_Dashboard_Component
            {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  expanded: selectors.getExpanded(state),
  items: selectors.getAllItems(state),
  metrics: selectors.getAllMetrics(state),
  builds: selectors.getAllBuilds(state),
  unitTestResults: selectors.getAllUnitTestResults(state),
  functionalTestResults: selectors.getAllFunctionalTestResults(state),
  isFetching: selectors.getIsFetching(state)
})

DBO_Dashboard = connect(
  mapStateToProps,
  { fetchItems, expandDashboardItem }
)(DBO_Dashboard)

export default DBO_Dashboard
