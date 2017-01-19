import React from 'react'

const DBO_Progress_Chart = ({ progress, status, isVisible }) => {
  const inlineStyle = {
    visibility: isVisible ? 'visible' : 'hidden'
  };

  const fillStyle = {
    width: (progress || 0) + '%'
  };

  return (
    <div className='dbo-progress-chart' style={inlineStyle}>
      <div className='chart-container'>
        <div className={'chart-value ' + status} style={fillStyle}></div>
      </div>
    </div>
  )
}

export default DBO_Progress_Chart
