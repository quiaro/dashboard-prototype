import React from 'react'

const DBO_Button_Panel_Build = ({ build }) => (
  <button className={'dbo-button-panel build ' + build.status}>
    <b className='panel-header'>Build</b>
    <div className='panel-body'>
      <div className='options'>
        <div className='debug'>
          <span>Debug</span>
        </div>
        <div className='release'>
          <span>Release</span>
        </div>
      </div>
      <span className='date'>{build.timeFinished}</span>
    </div>
  </button>
)

export default DBO_Button_Panel_Build
