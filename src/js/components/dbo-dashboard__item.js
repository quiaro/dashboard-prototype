import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import moment from 'moment'

import DBO_Progress_Chart from './dbo-progress-chart';
import DBO_Button_Panel_Metric from './dbo-button-panel_metric';
import DBO_Button_Panel_Test_Result from './dbo-button-panel_test-result';
import DBO_Result_Panel from './dbo-result-panel';

const DBO_Dashboard_Item = ({
  expanded,
  item,
  metrics,
  builds,
  unitTestResults,
  functionalTestResults,
  onItemClick
}) => {
  const itemMetric = item.metric_result && metrics[item.metric_result] || {};
  const itemUnitTestResult = item.unit_test_result && unitTestResults[item.unit_test_result] || {};
  const itemFunctionalTestResult = item.functional_test_result && functionalTestResults[item.functional_test_result] || {};
  const isCollapsed = (item.id !== expanded);
  const collapsedClass = (isCollapsed) ? 'collapsed' : '';
  const icon = (item.status === 'success') ? 'done' :
                (item.status === 'fail') ? 'error_outline' :
                  (item.status === 'running') ? 'cached' : 'hourglass_empty';

  return (
    <li className={'dbo-dashboard__item ' + item.status + ' ' + collapsedClass}>
      <div className='item-header'>
        <a href='#' onClick={() => onItemClick(item.id)} className='title'>
          <span className='name'>{item.name}</span>
        </a>
        <div className='owner'>{item.owner}</div>
        <div className='time'>{moment(item.timeStarted).format('LTS')}</div>
        <div className='state material-icons'><i>{icon}</i></div>

        <DBO_Progress_Chart
          progress={itemMetric.progressPercentage}
          status={itemMetric.status}
          isVisible={isCollapsed} />

         <DBO_Progress_Chart
          progress={itemUnitTestResult.progressPercentage}
          status={itemUnitTestResult.status}
          isVisible={isCollapsed} />

         <DBO_Progress_Chart
          progress={itemFunctionalTestResult.progressPercentage}
          status={itemFunctionalTestResult.status}
          isVisible={isCollapsed} />

      </div>
        <ReactCSSTransitionGroup
          transitionName="item-body"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={500}>
        {
          (!isCollapsed) &&
            <div className='item-body' key="item-body">
              <DBO_Button_Panel_Metric metrics={itemMetric} />
              <DBO_Button_Panel_Test_Result testResult={itemUnitTestResult} title='Phase II' />
              <DBO_Button_Panel_Test_Result testResult={itemFunctionalTestResult} title='Phase III' />

              <DBO_Result_Panel
                status={item.status}
                message={item.statusText}
                ctaText={item.statusCTA} />
            </div>
        }
        </ReactCSSTransitionGroup>
    </li>
  )
}

export default DBO_Dashboard_Item
