import React from 'react'
import DBO_Labeled_Bar_Chart from './dbo-labeled-bar-chart';

const DBO_Button_Panel_Test_Result = ({ testResult, title }) => {
  const testsPercentage = (testResult.totalTests) ?
                            Math.round(testResult.testsPassed / testResult.totalTests * 100) : 0;
  const coveragePercentage = testResult.coveragePercentage || 0;

  return (
    <button className={'dbo-button-panel test-result ' + testResult.status}>
      <b className='panel-header'>{title}</b>
      <div className='panel-body'>
        <DBO_Labeled_Bar_Chart percentage={testsPercentage} legend='tests passed' />
        <DBO_Labeled_Bar_Chart percentage={coveragePercentage} legend='code covered' />
      </div>
    </button>
  )
}

export default DBO_Button_Panel_Test_Result
