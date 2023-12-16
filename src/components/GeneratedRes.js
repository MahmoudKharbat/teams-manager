import React from 'react'
import "../style/GeneratedRes.css"

export const GeneratedRes = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
        </div>
    </div>
  ) : "";
}
