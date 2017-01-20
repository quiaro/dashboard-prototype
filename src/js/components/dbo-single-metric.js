import React from 'react'

const DBO_Single_Metric = ({ data }) => (
  <div className={'dbo-single-metric ' + data.result}>
    <div className='value'>
      <span className='text'>{data.value}</span>
    </div>
    <span className='label'>{data.label}</span>
  </div>
)

export default DBO_Single_Metric
