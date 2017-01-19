import React from 'react'
import DBO_Arrow_Metric from './dbo-arrow-metric'

const DBO_Button_Panel_Metric = ({ metrics }) => (
  <button className={'dbo-button-panel metrics ' + metrics.status}>
    <b className='panel-header'>Metrics</b>
    <div className='panel-body'>
      {metrics.data.map(datum =>
        <DBO_Arrow_Metric key={datum.label} data={datum} />
      )}
    </div>
  </button>
)

export default DBO_Button_Panel_Metric
