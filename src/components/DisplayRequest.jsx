import React from 'react'

function DisplayRequest(props) {
  return (
    <div>
        <div className="Disp-ReqName">
            Req#{props.oppName}
            <div className="Disp-Other">
                Origin:{props.oppOrigin} <span>&#x2192;</span> {props.oppDestination}
            </div>
        </div>

    </div>
  )
}

export default DisplayRequest