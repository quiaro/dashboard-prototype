import React from 'react'

const DBO_Result_Panel = ({ type, status, message, ctaText }) => {
  const resolutionText = (type !== 'firewall') ? '' :
    (status === 'success') ? 'Change Accepted' :
    (status === 'fail') ? 'Change Rejected' : '';

  if (status !== 'success' && status !== 'fail') {
    return <div className='dbo-result-panel'></div>;
  }

  return (
    <div className={'dbo-result-panel ' + type + ' ' + status}>
      <span>Result:</span>
      <div className="resolution">
        <em>{resolutionText}</em>
        <b>{message}</b>
      </div>
      <button className='cta'>{ctaText}</button>
    </div>
  )
}

export default DBO_Result_Panel
