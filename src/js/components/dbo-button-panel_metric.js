import React from 'react'
import DBO_Single_Metric from './dbo-single-metric'

const DBO_Button_Panel_Metric = ({ metrics }) => (
  <button className={'dbo-button-panel metrics ' + metrics.status}>
    <b className='panel-header'>Phase I</b>
    <div className='panel-body'>
      {metrics.data.map(datum =>
        <DBO_Single_Metric key={datum.label} data={datum} />
      )}
    </div>
  </button>
)

export default DBO_Button_Panel_Metric
