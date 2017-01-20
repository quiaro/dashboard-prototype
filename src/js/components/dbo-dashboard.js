import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import DBO_Dashboard_Item from './dbo-dashboard__item'

const DBO_Dashboard = (params) => (
  <ReactCSSTransitionGroup
    transitionName="dbo-dashboard"
    transitionAppear={true}
    transitionAppearTimeout={1000}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500} >

    <div className='dbo-dashboard animated'>
      <ol className='dbo-dashboard__header'>
        <li className="title">Task</li>
        <li className="owner">Owner</li>
        <li className="time">Time Started</li>
        <li className="state">State</li>
        <li className="chart">Metrics</li>
        <li className="chart">Build</li>
        <li className="chart">Unit Test</li>
        <li className="chart">Functional Test</li>
      </ol>
      <ul className='dbo-container'>
        <ReactCSSTransitionGroup
          transitionName="dbo-dashboard__item"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >

          {params.items.map(item =>
            <DBO_Dashboard_Item
              key={item.id}
              {...params}
              item={item}
              onItemClick={params.expandDashboardItem}
            />
          )}
        </ReactCSSTransitionGroup>
      </ul>
    </div>

  </ReactCSSTransitionGroup>
)

export default DBO_Dashboard
