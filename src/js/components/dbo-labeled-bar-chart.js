import React from 'react'

const DBO_Labeled_Bar_Chart = ({ percentage, legend }) => {

  const percentageValue = (percentage || 0) + '%';
  const fillStyle = {
    width: percentageValue
  };
  const status = (percentage && percentage > 60) ? 'success' : 'fail';

  return (
    <div className='dbo-labeled-bar-chart'>
      <div className='chart-container'>
        <div className={'chart-value'} style={fillStyle}></div>
        <div className='legend'>
          <b>{percentageValue}</b>
          <span>{legend}</span>
        </div>
      </div>
    </div>
  )
}

export default DBO_Labeled_Bar_Chart
