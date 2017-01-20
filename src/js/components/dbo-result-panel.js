import React from 'react'

const DBO_Result_Panel = ({ status, message, ctaText }) => {
  if (status !== 'success' && status !== 'fail') {
    return <div className='dbo-result-panel'></div>;
  }

  return (
    <div className={'dbo-result-panel ' + status}>
      <div className="resolution">
        <b>{message}</b>
      </div>
      <button className='cta'>{ctaText}</button>
    </div>
  )
}

export default DBO_Result_Panel
