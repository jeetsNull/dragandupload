
import React from 'react';

const Preview = ({ meta }) => {
  console.log(meta)
  const { name, percent, status, size } = meta
  return (
    <div style={{ alignSelf: 'flex-start', margin: '10px 0', fontFamily: 'Helvetica', width: '100%', textAlign: 'left' }}>
      <label>{status}, {name} {size} </label>
      <div className="w-full bg-gray-200 h-6 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-sm h-6 font-medium text-blue-100 text-center p-0.5 rounded-full" style={{"width": `${Math.round(percent)}%`}}>{Math.round(percent)}%</div>
      </div>
    </div>
  )
}

export default Preview;


