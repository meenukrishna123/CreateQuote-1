import React from 'react'
import './ConfirmRequestOrder.css'
function ConfirmRequestOrder(props) 
{
    const {label,name,type,placeholder,onChange,id,...inputProps}=props;
  return (
            <div className="FormInput">
                {
                    type==='select' && name==='AircraftType' && <><label >{label}</label> <select ><option>Turbo Prop</option><option>Jet</option><option>Prop</option></select> </>
                }
                {
                    type==='select' && name==='NoofStops' && <><label >{label}</label> <select label={label}  ><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </>
                }
                {
                    type==='select' && name==='AdditionalPass' && <><label >{label}</label> <select label={label}  ><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </>
                }
                {
                    type==='input' && <><label >{label}</label><input type={type} onChange={onChange} placeholder={placeholder}></input></>
                }
                {
                    type==='date' && <><label >{label}</label><input type={type} onChange={onChange} placeholder={placeholder}></input></>
                }
                {
                    type==='checkbox' && <><label >{label}</label><input type={type} onChange={onChange}></input></>
                }
                {
                    type==='textarea' && <> <label>{label}</label><textarea  rows="4" cols="50" onChange={onChange}></textarea></>
                }
            
            
            </div>
         )
}

export default ConfirmRequestOrder