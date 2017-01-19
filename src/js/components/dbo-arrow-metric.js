import React from 'react'

const DBO_Arrow_Metric = ({ data }) => (
  <div className={'dbo-arrow-metric ' + data.result}>
    <div className='value'>
      <span className='arrow'>&#10145;</span>
      <span className='text'>{data.value}</span>
    </div>
    <span className='label'>{data.label}</span>
  </div>
)

export default DBO_Arrow_Metric
